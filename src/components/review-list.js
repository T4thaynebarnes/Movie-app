import Review from "./review";

// this function will be passed a parameter of reviews and place them on the card above the text box

const ReviewList = ({ reviews }) => {
  // to see what is being put into the array for reviews
  console.log("ReviewList", reviews);
  return (
    <div>
      {reviews &&
        reviews.map((review, index) => <Review key={index} text={review} />)}
    </div>
  );
};
export default ReviewList;
