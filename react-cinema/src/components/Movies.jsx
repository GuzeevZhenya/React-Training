import React from "react";
import { Movie } from "./Movie";

export const Movies = (props) => {
  const { movies } = props;
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};
