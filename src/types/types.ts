export interface CardItem {
  id: number;
  title: string;
  description: string;
}

export interface CardProps {
  title: string;
  description: string;
}

export interface CardListProps {
  cards: CardItem[];
}

export interface ScrollToTopButtonProps {
  onClick: () => void;
}