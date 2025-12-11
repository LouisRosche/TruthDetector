/**
 * OFFLINE QUEUE SERVICE
 * Queues Firebase saves when offline and syncs when back online
 */

const QUEUE_KEY = 'truthHunters_offlineQueue';

/**
 * Offline Queue Manager
 * Handles queuing and syncing of Firebase operations when offline
 */
export const OfflineQueue = {
  /**
   * Get all queued items
   * @returns {Array} Queued items
   */
  getQueue() {
    try {
      const stored = localStorage.getItem(QUEUE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('Failed to read offline queue:', e);
      return [];
    }
  },

  /**
   * Save queue to localStorage
   * @param {Array} queue - Queue to save
   */
  saveQueue(queue) {
    try {
      localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
    } catch (e) {
      console.warn('Failed to save offline queue:', e);
    }
  },

  /**
   * Add item to queue
   * @param {string} type - Type of operation ('game' | 'reflection')
   * @param {Object} data - Data to save
   */
  enqueue(type, data) {
    const queue = this.getQueue();
    queue.push({
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      data,
      timestamp: Date.now(),
      retries: 0
    });
    this.saveQueue(queue);
    console.log(`Queued ${type} for later sync`);
  },

  /**
   * Remove item from queue
   * @param {string} id - Item ID to remove
   */
  dequeue(id) {
    const queue = this.getQueue();
    const filtered = queue.filter(item => item.id !== id);
    this.saveQueue(filtered);
  },

  /**
   * Get queue length
   * @returns {number} Number of items in queue
   */
  size() {
    return this.getQueue().length;
  },

  /**
   * Clear the queue
   */
  clear() {
    this.saveQueue([]);
  },

  /**
   * Process queue and sync with Firebase
   * @param {Object} FirebaseBackend - Firebase backend instance
   * @returns {Promise<{success: number, failed: number}>}
   */
  async sync(FirebaseBackend) {
    if (!FirebaseBackend?.initialized) {
      return { success: 0, failed: 0 };
    }

    const queue = this.getQueue();
    if (queue.length === 0) {
      return { success: 0, failed: 0 };
    }

    let success = 0;
    let failed = 0;

    for (const item of queue) {
      try {
        let saved = false;

        if (item.type === 'game') {
          saved = await FirebaseBackend.save(item.data);
        } else if (item.type === 'reflection') {
          saved = await FirebaseBackend.saveReflection(item.data);
        }

        if (saved) {
          this.dequeue(item.id);
          success++;
          console.log(`Synced queued ${item.type}`);
        } else {
          // Increment retry count
          item.retries++;
          if (item.retries >= 3) {
            // Give up after 3 retries
            this.dequeue(item.id);
            failed++;
            console.warn(`Gave up on queued ${item.type} after 3 retries`);
          }
        }
      } catch (e) {
        console.warn(`Failed to sync queued ${item.type}:`, e);
        item.retries++;
        if (item.retries >= 3) {
          this.dequeue(item.id);
          failed++;
        }
      }
    }

    // Save updated retry counts
    this.saveQueue(this.getQueue());

    return { success, failed };
  }
};

// Auto-sync when coming back online
if (typeof window !== 'undefined') {
  window.addEventListener('online', async () => {
    // Dynamic import to avoid circular dependency
    const { FirebaseBackend } = await import('./firebase');
    const result = await OfflineQueue.sync(FirebaseBackend);
    if (result.success > 0) {
      console.log(`Synced ${result.success} queued items`);
    }
  });
}
