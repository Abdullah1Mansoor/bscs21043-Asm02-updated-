import { useState } from 'react';
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-container">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span
              className="star"
              style={{ color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            >
              ★
            </span>
          </label>
        );
      })}
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Rating;
