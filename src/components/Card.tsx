import { useNavigate } from 'react-router-dom';
import { CardProps } from '../types/types';

function Card({ id, title, description, ...props }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <div className='card' {...props} onClick={handleClick} data-testid='card'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-description'>{description}</p>
    </div>
  );
}

export default Card;
