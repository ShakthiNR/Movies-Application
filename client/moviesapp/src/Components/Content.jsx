import React from "react";
import useFetchMovies from "./Hooks/useFetchMovies";
import "./Css/Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  const [movies, setMovies, error, loading] = useFetchMovies();

  if (error) {
    return <center className="error"> {error.message}</center>;
  }

  if (loading) {
    return <center className="loading"> Loading....</center>;
  }

  return (
    <React.Fragment>
      <Link to="/create/movie">
        <center>
          <button> Create Movie </button>
        </center>
      </Link>
      {!error && (
        <div>
          {movies.length > 0 && (
            <div className="layout">
              <DisplayMovies movies={movies} />{" "}
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Content;

const DisplayMovies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        const { moviename, rating, releaseddate } = movie;
        return (
          <MovieCard
            key={index}
            moviename={moviename}
            rating={rating}
            releaseddate={releaseddate}
          />
        );
      })}
    </div>
  );
};

const MovieCard = ({ moviename, rating, releaseddate }) => {
  return (
    <div className="card--outer">
      <div>
        <strong>Movie Name </strong> {moviename}
      </div>{" "}
      <br />
      <div>
        <strong>Its Rating </strong> {rating}
      </div>
      <br />
      <div>
        <strong> Released At</strong> {releaseddate}
      </div>
    </div>
  );
};
