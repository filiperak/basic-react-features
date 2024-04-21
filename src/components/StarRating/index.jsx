import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css'

const StarRating = ({ numStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    console.log('leave');
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(numStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={"34px"}
            // fill="yellow"
          />
        );
      })}
    </div>
  );
};
export default StarRating;
