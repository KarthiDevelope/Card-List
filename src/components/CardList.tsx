import { useState, useEffect, useCallback } from 'react';
import Card from './Card';
import ScrollToTopButton from './ScrollToTopButton';
import { CardListProps } from '../types/types';

function CardList({ cards }: CardListProps) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = useCallback(() => {
    if (window?.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className='card-list-container'>
      <div className='card-list'>
        {cards?.map((card) => (
          <Card
            key={card?.id}
            title={card?.title}
            description={card?.description}
            data-testid='card'
          />
        ))}
      </div>
      {showScrollButton && <ScrollToTopButton onClick={scrollToTop} />}
    </div>
  );
}

export default CardList;
