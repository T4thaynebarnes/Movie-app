/* *** HAD TO INSTALL FROM COMMAND LINE "npm i react-icons" */

import { useState } from "react";
import { FaStar } from "react-icons/fa";

// star rating component, used map() and spreader operator for 5 stars each star is its own array
function Stars() {
  const [rating, setRatingState] = useState(null);
  const [hover, setHoverState] = useState(null);
  // using spredder operator ... to create 10 stars
  return (
    <div>
      {[...Array(10)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRatingState(currentRating)}
            />
            <FaStar
              className="star"
              size={30}
              color={
                currentRating <= (hover || rating)
                  ? "#ffc107"
                  : "rgb(195, 214, 221)"
              }
              onMouseEnter={() => setHoverState(currentRating)}
              onMouseLeave={() => setHoverState(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
export default Stars;
