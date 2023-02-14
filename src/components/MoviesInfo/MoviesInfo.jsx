import { Component } from 'react';
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

class MoviesInfo extends Component {
  state = {
    movies: null,
    status: Status.IDLE,
    error: null,
    page: 1,
    totalMovies: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchQuery, type } = this.props;
    const prevQuery = prevProps.searchQuery;
    const prevType = prevProps.type;

    if (prevQuery !== searchQuery || prevType !== type) {
      this.setState({ status: Status.PENDING });

      moviesApi
        .fetchMovies(searchQuery, page, type)
        .then(movies => {
          if (movies.Response === 'False') {
            return Promise.reject(new Error(movies.Error));
          }
          this.setState({
            movies: movies.Search,
            totalMovies: Number(movies.totalResults),
            page: 1,
            status: Status.RESOLVED,
          });
        })
        .catch(error => this.setState({ error: error.message, status: Status.REJECTED }));
    }
  }

  render() {
    const { movies, totalMovies, status, error } = this.state;

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
  }
}

MoviesInfo.propTypes = {
  type: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default MoviesInfo;
