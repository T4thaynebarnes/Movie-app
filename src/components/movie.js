import { useEffect, useState } from "react";
import Stars from "./stars";
import ReviewForm from "./review-form";
import ReviewList from "./review-list";
function Movie() {
  // setting the state to a value in this case an empty array
  const [movies, setMoviesState] = useState([]);
  const [reviews, setReviews] = useState([]);
  // puting api endpoint into a variable
  const MOVIES_ENDPOINT =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const getMovies = async () => {
    console.log("(before state added) this is movies:", movies);
    // setting try catch method on api fetch request

    try {
      const response = await fetch(MOVIES_ENDPOINT, {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTdiZGRiMjBlNmJjNTVhYjc2MzU5YTFkMWUwNjFhYSIsInN1YiI6IjY1YjU5NzM1MTI0MjVjMDE4MzQ5MTI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XZCfedwzBf7TSHa41_LvRf518z7VUqxJh89fiGP5-to",
        },
      }); // TMDB API
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const resp = await response.json(); // parsing the response as JSON
      console.log("this is the results of the API", response);
      //  setting the state to the response i got from the movie api/ results is the key to the values requested. is it given from api console.loging
      setMoviesState(resp.results);
      return;
    } catch (error) {
      console.log(
        "I see said the blind man as he pissed into the wind!",
        error
      );
    }
  };
  //  putting function to post reviews here I found it works only here
  function showReviews(newReview) {
    setReviews([reviews, newReview]);
    // this will show the values being passed thru newReview
    console.log("at function showReviews", newReview);
  }

  // end of posting function
  // considered a hook: performing side-effect in a functional component. setting the state to an array of the data from api in getMovies function
  useEffect(() => {
    console.log("value of movies in useEffect()", movies);
    getMovies();
  }, []);

  return (
    <div className="App">
      {movies.slice(10).map((movie, index, array) => {
        console.log(
          "after map and slice method: this is the value of movie",
          movie,
          "this is the array, this is the value of movies",
          array,
          "this is the index",
          index
        );
        return (
          <div key={index}>
            <div id="background" className="container-fluid">
              <div className="container-fluid">
                <div className="row-fluid">
                  <div className="col-sm">
                    <div
                      className="card container-fluid"
                      style={{
                        width: "30rem",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={movie.title}
                        alt={movie.title}
                      ></img>

                      <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.overview}</p>
                        <div className="card-text">
                          Release Date: {movie.release_date}
                        </div>
                        <div className="card-text">
                          Movie Critics rated it a {movie.vote_average} out of
                          10!{" "}
                        </div>
                        <div>
                          <h5 className="card-text">Rate this Flick!</h5>
                          <Stars />
                          <h5>Leave a review:</h5>
                        </div>
                        <div>
                          <ReviewList reviews={reviews} />
                        </div>
                        <div className="mt-4">
                          <ReviewForm movie={movie} showReviews={showReviews} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Movie;
