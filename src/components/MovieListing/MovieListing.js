import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        console.log("Movies Fetched", movie);
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  const ShowStatus = shows.Response === "True";
  renderShows = ShowStatus ? (
    shows.Search.map((movie, index) => {
      console.log("fetch movie", movie);
      return <MovieCard key={index} data={movie} />;
    })
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
