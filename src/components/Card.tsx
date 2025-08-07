import { CardProps } from '../types/types';

function Card({ title, description, ...props }: CardProps) {
  return (
    <div className='card' {...props}>
      <h3 className='card-title'>{title}</h3>
      <p className='card-description'>{description}</p>
    </div>
  );
}

export default Card;
