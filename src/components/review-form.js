import { useState } from "react";
import ReviewList from "./review-list";

// this will be for the form to leave a review

const ReviewForm = ({ value, movie }) => {
  // setting the state with useState() requires string value for the text from the user box and and Array to keep it in
  const [review, setReviewState] = useState("");
  const [reviews, setReviews] = useState([]);

  // this function takes in the inputed value of the text box from the user
  const updateReview = () => {
    const textAreaValue = document.getElementById(
      `review-text-${movie.id}`
    ).value;
    setReviewState(textAreaValue);
    console.log("updateReview()");
  };

  const onSubmit = async (event) => {
    console.log("this button works");
    event.preventDefault();

    const newReview = {
      id: Date.now(),
      text: review,
    };
    setReviews([...reviews, newReview]);
    console.log("this is newReview", newReview);

    setReviewState("");
  };

  return (
    <div>
      <div className="posted-review">
        <ReviewList reviews={reviews} />
      </div>
      <form onSubmit={onSubmit} className="form-floating">
        <textarea
          className="form-control "
          id={`review-text-${movie.id}`}
          name="review"
          value={review}
          onChange={updateReview}
        />
        <label htmlFor={`review-text-${movie.id}`}>
          click here and leave your review!
        </label>
        <button className="review-sub-btn" type="submit">
          Submit ➕
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
