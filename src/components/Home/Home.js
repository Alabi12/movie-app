import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieListing from '../MovieListing/MovieListing';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/movies/movieSlice';
import Header from '../Header/Header';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className="banner-img" />
      <MovieListing />
    </div>
  );
};

export default Home;
