import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // eslint-disable-next-line
  let renderMovies;
  // eslint-disable-next-line
  let renderShows = '';
  // eslint-disable-next-line
  renderMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
    // eslint-disable-next-line
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  renderShows = shows.Response === 'True' ? (
  // eslint-disable-next-line
    shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
  ) : (
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
  );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
