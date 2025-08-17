import { useParams } from 'react-router-dom';
import { CardItem } from '../types/types';

interface CardDetailProps {
  cards: CardItem[];
}

function CardDetail({ cards }: CardDetailProps) {
  const { id } = useParams<{ id: string }>();
  const card = cards.find((c) => c.id === Number(id));

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className='card-detail'>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  );
}

export default CardDetail;
