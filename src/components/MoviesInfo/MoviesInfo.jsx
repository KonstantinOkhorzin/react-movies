import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../MoviesList';
import MoviesErrorView from '../MoviesErrorView';
import MoviesPendingView from '../MoviesPendingView';

import moviesApi from '../../services/omdb-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MoviesInfo = ({ searchQuery, type }) => {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    setStatus(Status.PENDING);

    moviesApi
      .fetchMovies(searchQuery, page, type)
      .then(movies => {
        if (movies.Response === 'False') {
          return Promise.reject(new Error(movies.Error));
        }
        setMovies(movies.Search);
        setTotalMovies(Number(movies.totalResults));
        setStatus(Status.RESOLVED);
        setPage(1);
      })
      .catch(error => {
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [searchQuery, page, type]);

  switch (status) {
    case 'pending':
      return <MoviesPendingView />;

    case 'rejected':
      return <MoviesErrorView error={error} />;

    case 'resolved':
      return <MoviesList movies={movies} totalMovies={totalMovies} />;

    default:
      return null;
  }
};

MoviesInfo.propTypes = {
  type: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default MoviesInfo;
