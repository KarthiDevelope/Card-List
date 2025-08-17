export interface CardItem {
  id: number;
  title: string;
  description: string;
}

export interface CardProps {
  id: number;
  title: string;
  description: string;
  [key: string]: any;
}

export interface CardDetailProps {
  cards: CardItem[];
}

export interface CardListProps {
  cards: CardItem[];
}

export interface ScrollToTopButtonProps {
  onClick: () => void;
}