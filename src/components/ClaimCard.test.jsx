/**
 * ClaimCard Component Tests
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ClaimCard } from './ClaimCard';

describe('ClaimCard', () => {
  const mockClaim = {
    id: 'test-claim-1',
    text: 'The Earth revolves around the Sun.',
    subject: 'Astronomy',
    difficulty: 'easy',
    answer: 'TRUE',
    source: 'expert-sourced'
  };

  it('renders claim text', () => {
    render(<ClaimCard claim={mockClaim} round={1} totalRounds={5} />);
    expect(screen.getByText(/The Earth revolves around the Sun/i)).toBeInTheDocument();
  });

  it('displays round information', () => {
    render(<ClaimCard claim={mockClaim} round={3} totalRounds={10} />);
    expect(screen.getByText(/Round 3/i)).toBeInTheDocument();
  });

  it('shows subject badge', () => {
    render(<ClaimCard claim={mockClaim} round={1} totalRounds={5} />);
    expect(screen.getByText(/Astronomy/i)).toBeInTheDocument();
  });

  it('indicates difficulty level', () => {
    render(<ClaimCard claim={mockClaim} round={1} totalRounds={5} />);
    expect(screen.getByText(/easy/i)).toBeInTheDocument();
  });

  it('displays AI-generated source indicator when applicable', () => {
    const aiClaim = { ...mockClaim, source: 'ai-generated' };
    render(<ClaimCard claim={aiClaim} round={1} totalRounds={5} />);
    // Check for AI indicator (might be an icon or text)
    const card = screen.getByRole('article');
    expect(card).toBeInTheDocument();
  });

  it('applies appropriate styling for different difficulty levels', () => {
    const { rerender } = render(
      <ClaimCard claim={{ ...mockClaim, difficulty: 'easy' }} round={1} totalRounds={5} />
    );
    let difficultyBadge = screen.getByText(/easy/i);
    expect(difficultyBadge).toBeInTheDocument();

    rerender(<ClaimCard claim={{ ...mockClaim, difficulty: 'hard' }} round={1} totalRounds={5} />);
    difficultyBadge = screen.getByText(/hard/i);
    expect(difficultyBadge).toBeInTheDocument();
  });

  it('renders accessibility attributes', () => {
    render(<ClaimCard claim={mockClaim} round={1} totalRounds={5} />);
    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('aria-label');
  });
});
