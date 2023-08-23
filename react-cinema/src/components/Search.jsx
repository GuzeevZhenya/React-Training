import React, { useState } from "react";

export const Search = (props) => {
  const [search, setSearch] = useState();

  const handleKey = (e) => {
    if (e.key === "Enter") {
      props.searchMovies(search);
    }
  };

  const handelerButton = (movie) => {
    setSearch(movie);
    props.searchMovies(search);
  };

  
  return (
    <div>
      <div className="row">
        <div className="col s12"></div>
        <div className="inpit-field inline">
          <input
            placeholder="search"
            type="search"
            className="validate"
            onChange={(e) => setSearch(e.currentTarget.value)}
            onKeyDown={handleKey}
          />
          <button
            onClick={(e) => handelerButton(e.currentTarget.value)}
          ></button>
        </div>
      </div>
    </div>
  );
};
