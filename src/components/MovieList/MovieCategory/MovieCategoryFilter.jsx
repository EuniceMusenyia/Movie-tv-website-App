import React from "react";

const FilterMovies = ({ selectedCategory, handleCategoryChange }) => {
  const categories = [
    { id: "all", name: "All" },
    { id: "28", name: "Action" },
    { id: "12", name: "Adventure" },
    { id: "16", name: "Animation" },
    { id: "35", name: "Comedy" },
    { id: "80", name: "Crime" },
    { id: "10752", name: "War" },
    { id: "878", name: "Science Fiction" },
    { id: "53", name: "Thriller" },
    { id: "18", name: "Drama" },
    { id: "10751", name: "Family" },
    { id: "14", name: "Fantasy" },
    { id: "36", name: "History" },
    { id: "27", name: "Horror" },
    { id: "10749", name: "Romance" },
  ];

  return (
    <div className="category-buttons">
      {categories.map((category) => (

        <button
          key={category.id}
          onClick={() => handleCategoryChange(category.id, category.name)}
          className={selectedCategory === category.id ? "active" : ""}
        button>

          {category.name}
        </button>
      ))}
    </div>
  );
};

export default FilterMovies;
