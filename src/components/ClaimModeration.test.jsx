/**
 * ClaimModeration Component Tests
 * Tests the teacher dashboard for approving/rejecting student claims
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

// Mock Firebase backend
vi.mock('../services/firebase', () => ({
  FirebaseBackend: {
    initialized: true,
    getPendingClaims: vi.fn(),
    approveClaim: vi.fn(),
    rejectClaim: vi.fn()
  }
}));

// Mock Button component
vi.mock('./Button', () => ({
  Button: ({ children, onClick, variant, disabled }) => (
    <button onClick={onClick} disabled={disabled} data-variant={variant}>
      {children}
    </button>
  )
}));

import { ClaimModeration } from './ClaimModeration';
import { FirebaseBackend } from '../services/firebase';

describe('ClaimModeration', () => {
  const mockClaims = [
    {
      id: 'claim-1',
      text: 'The Earth is round',
      subject: 'Science',
      submittedBy: 'student-1',
      answer: 'TRUE',
      explanation: 'Basic astronomy fact'
    },
    {
      id: 'claim-2',
      text: 'Water boils at 100°C',
      subject: 'Chemistry',
      submittedBy: 'student-2',
      answer: 'MIXED',
      explanation: 'At sea level pressure'
    }
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    FirebaseBackend.getPendingClaims.mockResolvedValue(mockClaims);
    FirebaseBackend.approveClaim.mockResolvedValue(true);
    FirebaseBackend.rejectClaim.mockResolvedValue(true);
  });

  describe('Initial Rendering', () => {
    it('shows loading state initially', () => {
      FirebaseBackend.getPendingClaims.mockImplementation(() => new Promise(() => {}));
      render(<ClaimModeration classCode="TEST123" />);

      expect(screen.getByText(/Loading pending claims.../i)).toBeInTheDocument();
    });

    it('loads and displays pending claims', async () => {
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(FirebaseBackend.getPendingClaims).toHaveBeenCalledWith('TEST123');
      });

      await waitFor(() => {
        expect(screen.getByText(/The Earth is round/i)).toBeInTheDocument();
        expect(screen.getByText(/Water boils at 100°C/i)).toBeInTheDocument();
      });
    });

    it('displays pending claims header', async () => {
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText(/📋 Pending Claims/i)).toBeInTheDocument();
      });
    });

    it('shows message when no claims are pending', async () => {
      FirebaseBackend.getPendingClaims.mockResolvedValue([]);
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText(/No pending claims/i)).toBeInTheDocument();
      });
    });
  });

  describe('Claim Display', () => {
    it('displays claim text', async () => {
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText(/The Earth is round/i)).toBeInTheDocument();
      });
    });

    it('displays subject badge', async () => {
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText('Science')).toBeInTheDocument();
        expect(screen.getByText('Chemistry')).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling', () => {
    it('displays error message when loading fails', async () => {
      FirebaseBackend.getPendingClaims.mockRejectedValue(new Error('Network error'));
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText(/Failed to load pending claims/i)).toBeInTheDocument();
        expect(screen.getByText(/Network error/i)).toBeInTheDocument();
      });
    });
  });

  describe('Firebase Not Initialized', () => {
    it('handles uninitialized Firebase gracefully', async () => {
      // Temporarily mock Firebase as uninitialized
      const originalInitialized = FirebaseBackend.initialized;
      FirebaseBackend.initialized = false;

      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText(/Firebase not configured/i)).toBeInTheDocument();
      });

      // Restore
      FirebaseBackend.initialized = originalInitialized;
    });
  });

  describe('Accessibility', () => {
    it('renders without crashing', async () => {
      render(<ClaimModeration classCode="TEST123" />);

      await waitFor(() => {
        expect(screen.getByText(/📋 Pending Claims/i)).toBeInTheDocument();
      }, { timeout: 3000 });
    });

    it('provides classCode to Firebase', async () => {
      render(<ClaimModeration classCode="ABC123" />);

      await waitFor(() => {
        expect(FirebaseBackend.getPendingClaims).toHaveBeenCalledWith('ABC123');
      }, { timeout: 3000 });
    });
  });
});
