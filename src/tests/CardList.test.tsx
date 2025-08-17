import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardList from '../components/CardList';
import { CardItem } from '../types/types';

describe('CardList Component', () => {
  const mockCards: CardItem[] = [
    { id: 1, title: 'Tip #1', description: 'Description 1' },
    { id: 2, title: 'Tip #2', description: 'Description 2' },
  ];

  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders all cards in the list', () => {
    render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );
    expect(screen.getByText('Tip #1')).toBeInTheDocument();
    expect(screen.getByText('Tip #2')).toBeInTheDocument();
  });

  it('does not show scroll button initially', () => {
    render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );
    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();
  });

  it('shows scroll button when scrolled', () => {
    render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );

    Object.defineProperty(window, 'scrollY', { value: 500 });
    fireEvent.scroll(window);

    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument();
  });

  it('hides scroll button when scrolled back to top', () => {
    render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );

    // Scroll down
    Object.defineProperty(window, 'scrollY', { value: 500 });
    fireEvent.scroll(window);

    // Scroll back up
    Object.defineProperty(window, 'scrollY', { value: 0 });
    fireEvent.scroll(window);

    expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument();
  });

  it('scrolls to top when button is clicked', () => {
    render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );

    // Scroll down first
    Object.defineProperty(window, 'scrollY', { value: 500 });
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /scroll to top/i });
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });

  it('removes scroll listener on unmount', () => {
    const removeListener = jest.spyOn(window, 'removeEventListener');
    const { unmount } = render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );

    unmount();
    expect(removeListener).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('renders "No cards" message when list is empty', () => {
    render(
      <MemoryRouter>
        <CardList cards={[]} />
      </MemoryRouter>
    );
    expect(screen.getByText('No cards to display')).toBeInTheDocument();
  });
});
