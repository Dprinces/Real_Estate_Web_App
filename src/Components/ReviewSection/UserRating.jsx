import React, { useState } from "react";
import './UserRating.css'

const UserRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div>
      <p>Rate Your Experience: {rating} stars</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          selected={value <= rating}
          onClick={() => handleStarClick(value)}
        />
      ))}
    </div>
  );
};

const Star = ({ selected, onClick }) => (
  <span
    onClick={onClick}
    className={`star ${selected ? "selected" : "" }`}
  >
    ★
  </span>
);

export default UserRating;
