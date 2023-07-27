

import React from 'react';
import './App.css';
import Navbar from './components/MovieList/NavigationBar';
import MovieList from './components/MovieList';
import MovieLists from './components/MovieList/MovieSlider/slider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieList/MoviesDetails/MovieDetails';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
        <MovieLists />
        <Routes>
          <Route path='/' element={<MovieList />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

