import { render, screen } from '@testing-library/react';
import CardList from '../components/CardList';
import { CardItem } from '../types/types';

describe('CardList Component', () => {
  const mockCards: CardItem[] = [
    { id: 1, title: 'Tip #1', description: 'Description 1' },
    { id: 2, title: 'Tip #2', description: 'Description 2' },
  ];

  it('renders all cards in the list', () => {
    render(<CardList cards={mockCards} />);

    expect(screen.getByText('Tip #1')).toBeInTheDocument();
    expect(screen.getByText('Tip #2')).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(2);
  });
});
