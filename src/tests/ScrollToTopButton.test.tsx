import { render, fireEvent, screen } from '@testing-library/react';
import ScrollToTopButton from '../components/ScrollToTopButton';

describe('ScrollToTopButton Component', () => {
  it('calls onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<ScrollToTopButton onClick={mockOnClick} />);
    fireEvent.click(screen.getByRole('button', { name: /scroll to top/i }));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('has correct accessibility attributes', () => {
    render(<ScrollToTopButton onClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Scroll to top');
    expect(button).toHaveClass('scroll-to-top-button');
  });
});