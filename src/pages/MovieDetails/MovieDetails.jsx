import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PendingDataView from '../../components/PendingDataView';
import ErrorDataView from '../../components/ErrorDataView ';
import MovieDataView from '../../components/MovieDataView';

import moviesApi from '../../services/omdb-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(Status.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(Status.PENDING);

    moviesApi
      .fetchMovieById(movieId)
      .then(movie => {
        if (movie.Response === 'False') {
          return Promise.reject(new Error(movie.Error));
        }
        setMovie(movie);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error.message);
        setStatus(Status.REJECTED);
      });
  }, [movieId]);

  switch (status) {
    case 'pending':
      return <PendingDataView />;

    case 'rejected':
      return <ErrorDataView error={error} />;

    case 'resolved':
          return <MovieDataView {...movie} />;

    default:
      return null;
  }
};

export default MovieDetails;
