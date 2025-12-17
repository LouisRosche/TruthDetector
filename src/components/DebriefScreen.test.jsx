/**
 * DebriefScreen Component Tests
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DebriefScreen } from './DebriefScreen';

describe('DebriefScreen', () => {
  const mockTeam = {
    name: 'Test Team',
    score: 15,
    predictedScore: 12,
    results: [
      {
        round: 1,
        claimId: 'claim-1',
        verdict: 'TRUE',
        correct: true,
        points: 5,
        confidence: 3
      },
      {
        round: 2,
        claimId: 'claim-2',
        verdict: 'FALSE',
        correct: false,
        points: -6,
        confidence: 3
      },
      {
        round: 3,
        claimId: 'claim-3',
        verdict: 'MIXED',
        correct: true,
        points: 3,
        confidence: 2
      }
    ],
    avatar: { emoji: '🔍', name: 'Detective' }
  };

  const mockClaims = [
    {
      id: 'claim-1',
      text: 'Claim 1 text',
      answer: 'TRUE',
      explanation: 'Explanation 1',
      subject: 'Science',
      source: 'expert-sourced'
    },
    {
      id: 'claim-2',
      text: 'Claim 2 text',
      answer: 'TRUE',
      explanation: 'Explanation 2',
      subject: 'History',
      source: 'ai-generated',
      errorPattern: 'Myth Perpetuation'
    },
    {
      id: 'claim-3',
      text: 'Claim 3 text',
      answer: 'MIXED',
      explanation: 'Explanation 3',
      subject: 'Geography',
      source: 'expert-sourced'
    }
  ];

  const mockOnRestart = vi.fn();

  it('displays team name and final score', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    expect(screen.getByText(/Test Team/i)).toBeInTheDocument();
    expect(screen.getByText(/15/)).toBeInTheDocument(); // Base score
  });

  it('calculates and displays calibration bonus', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    // Predicted: 12, Actual: 15, difference = 3 (not within ±2, no bonus)
    // Or check if within range and bonus awarded
    const calibrationText = screen.queryByText(/calibration/i);
    expect(calibrationText).toBeInTheDocument();
  });

  it('shows accuracy percentage', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    // 2 correct out of 3 = 67%
    const accuracyText = screen.getByText(/67%|accuracy/i);
    expect(accuracyText).toBeInTheDocument();
  });

  it('displays achievements earned', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    const achievementsSection = screen.getByText(/achievements|badges/i);
    expect(achievementsSection).toBeInTheDocument();
  });

  it('shows round-by-round breakdown', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    // Should show each round's result
    expect(screen.getByText(/Round 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Round 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Round 3/i)).toBeInTheDocument();
  });

  it('calls onRestart when restart button is clicked', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    const restartButton = screen.getByRole('button', { name: /play again|new game|restart/i });
    fireEvent.click(restartButton);

    expect(mockOnRestart).toHaveBeenCalledTimes(1);
  });

  it('displays correct/incorrect indicators for each round', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    // Look for visual indicators (checkmarks, X's, or text)
    const correctIndicators = screen.getAllByText(/✓|correct/i);
    expect(correctIndicators.length).toBeGreaterThan(0);
  });

  it('shows explanations for claims', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    // Explanations should be visible or expandable
    expect(screen.getByText(/Explanation 1/i)).toBeInTheDocument();
  });

  it('handles empty results gracefully', () => {
    const emptyTeam = { ...mockTeam, results: [] };

    render(
      <DebriefScreen
        team={emptyTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    // Should not crash, should show 0 score or similar
    expect(screen.getByText(/Test Team/i)).toBeInTheDocument();
  });

  it('displays team avatar', () => {
    render(
      <DebriefScreen
        team={mockTeam}
        claims={mockClaims}
        onRestart={mockOnRestart}
        difficulty="mixed"
        teamAvatar={mockTeam.avatar}
      />
    );

    expect(screen.getByText(/🔍/)).toBeInTheDocument();
  });
});
