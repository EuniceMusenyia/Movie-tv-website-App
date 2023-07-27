

import React, { useState } from "react";
import "./style.css";
import { searchMovies } from "../../../utilities/utilities";

const navigationbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async () => {
    const results = await searchMovies(searchValue);
    setSearchResults(results.results);
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <div>
          <h1 className="logo">
            M<span>oo</span>vie
          </h1>
        </div>

        <div className="search">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder=""
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="links">
          <li> <h3>Home</h3></li>
          <li> <h5>My List</h5></li>
          <button><h3>Sign In</h3></button>
        </div>
      </nav>

      
      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default navigationbar;

