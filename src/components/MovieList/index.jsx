import React, { useEffect, useState } from "react";
import { getMovies } from "../../utilities/utilities";
import ImageContainer from "../../atoms/Image-container";
import "./style.css";
import CategoryFilter from "./MovieCategory/MovieCategoryFilter";
import MovieDetails from "./MoviesDetails/MovieDetails";

const MovieList = ({ searchResults }) => {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCategoryName, setSelectedCategoryName] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null); 

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
    })();
  }, []);

  const handleCategoryChange = (categoryId, categoryName) => {
    setSelectedCategory(categoryId);
    setSelectedCategoryName(categoryName);
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieId); 
  };

  const handleCloseMovieDetails = () => {
    setSelectedMovie(null); 
  };

  const filteredMovies =
    selectedCategory === "all"
      ? movies
      : movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedCategory)));

  const displaymovies = searchResults && searchResults.length > 0 ? searchResults : filteredMovies;

  return (
    <div>
      {selectedCategoryName !== "All" && <h1>{selectedCategoryName} Movies</h1>}

      <CategoryFilter
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <div className="Movies">
        {displaymovies.map((item) => (
          <ImageContainer
            props={item}
            key={item.id}

            // Calling handleMovieClick when a movie is clicked
            onClick={() => handleMovieClick(item.id)} 
          />
        ))}
      </div>

      {selectedMovie && (

        // Showing movie details
        <MovieDetails movieId={selectedMovie} onClose={handleCloseMovieDetails} />
      )}
    </div>
  );
};

export default MovieList;

