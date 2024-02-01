// this function will return the text from the review and display it
const Review = ({ text }) => {
  console.log("text", text);
  return (
    <div className="review">
      <p>{text.text}</p>
    </div>
  );
};
export default Review;
