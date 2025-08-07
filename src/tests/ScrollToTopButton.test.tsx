import { render, fireEvent, screen } from '@testing-library/react';
import ScrollToTopButton from '../components/ScrollToTopButton';

describe('ScrollToTopButton Component', () => {
  it('calls onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<ScrollToTopButton onClick={mockOnClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
