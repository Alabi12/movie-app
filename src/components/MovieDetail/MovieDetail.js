import React, { useEffect } from 'react';
import './MovieDetail.scss';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from '../../redux/movies/movieSlice';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="logo">
              <Link to="/">
                <FaAngleLeft className="fa-icon" />
              </Link>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating
                {' '}
                <i className="fa fa-star" />
                {' '}
                :
                {' '}
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes
                {' '}
                <i className="fa fa-thumbs-up" />
                {' '}
                :
                {' '}
                {data.imdbVotes}
              </span>
              <span>
                Year
                {' '}
                <i className="fa fa-calendar" />
                {' '}
                :
                {' '}
                {data.Year}
              </span>
            </div>
            <div className="movie-info">
              <ul>
                <li>Director</li>
                <li>{data.Director}</li>
              </ul>
              <ul>
                <li>Stars</li>
                <li>{data.Actors}</li>
              </ul>
              <ul>
                <li>Languages</li>
                <li>{data.Language}</li>
              </ul>
              <ul>
                <li>Awards</li>
                <li>{data.Awards}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
