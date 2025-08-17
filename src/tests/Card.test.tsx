import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Card Component', () => {
  const testProps = {
    id: 1,
    title: 'Test Title',
    description: 'Test Description',
  };

  it('renders card with title and description', () => {
    render(<Card {...testProps} />);
    expect(screen.getByText(testProps.title)).toBeInTheDocument();
    expect(screen.getByText(testProps.description)).toBeInTheDocument();
  });

  it('navigates when the card div is clicked', () => {
    render(<Card id={1} title='Test' description='Test' />);
    fireEvent.click(screen.getByTestId('card')); // Target the div, not button
    expect(mockNavigate).toHaveBeenCalledWith('/card/1');
  });
});
