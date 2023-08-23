import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   fetch("https://www.omdbapi.com/?apikey=c545be60&s=matrix ")
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.Search));
  // }, []);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=78584b3c&s=matrix")
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
  }, []);

  const searchMovies = (str) => {
    fetch(`https://www.omdbapi.com/?apikey=c545be60&s=${str}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search));
    console.log(movies);
  };

  return (
    <div>
      <Search searchMovies={searchMovies} />
      {movies.length ? <Movies movies={movies} /> : <Preloader />}
    </div>
  );
};
