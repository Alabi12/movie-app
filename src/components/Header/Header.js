import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../redux/movies/movieSlice';
import './Header.scss'

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"><FaAngleLeft className="fa-icon" /></Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="search for movies"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
