import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDetail from '../components/CardDetail';
import { CardItem } from '../types/types';

jest.mock('react-router-dom', () => {
  const original = jest.requireActual('react-router-dom');
  return {
    ...original,
    useParams: jest.fn(),
  };
});

describe('CardDetail Component', () => {
  const mockCards: CardItem[] = [
    { id: 1, title: 'Tip #1', description: 'Description 1' },
    { id: 2, title: 'Tip #2', description: 'Description 2' },
  ];

  it('renders card details when card exists', () => {
    require('react-router-dom').useParams.mockReturnValue({ id: '1' });
    render(<CardDetail cards={mockCards} />);
    expect(screen.getByText('Tip #1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  it('shows not found message when card does not exist', () => {
    require('react-router-dom').useParams.mockReturnValue({ id: '999' });
    render(<CardDetail cards={mockCards} />);
    expect(screen.getByText('Card not found')).toBeInTheDocument();
  });
});