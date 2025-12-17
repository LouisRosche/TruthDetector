/**
 * Button Component Tests
 */

import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies variant styling', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('forwards additional props to button element', () => {
    render(<Button type="submit" aria-label="Submit form">Submit</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('aria-label', 'Submit form');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('handles keyboard interaction (Enter and Space)', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Press Me</Button>);

    const button = screen.getByRole('button');

    // Enter key
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(handleClick).toHaveBeenCalled();

    // Space key
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
