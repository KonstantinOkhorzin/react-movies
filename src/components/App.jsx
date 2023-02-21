import { useState, useEffect } from 'react';

import Title from './Title';
import Container from './UI/Container';
import SearchForm from './SearchForm';
import MoviesDataView from './MoviesDataView';
import MoviesErrorView from './MoviesErrorView';
import MoviesPendingView from './MoviesPendingView';

import moviesApi from '../services/omdb-api';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovie = (movie, type) => {
    setQuery(movie.toLowerCase());
    setType(type);
    setMovies([]);
    setPage(1);
    setError(null);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);

    moviesApi
      .fetchMovies(query, type, page)
      .then(movies => {
        if (movies.Response === 'False') {
          return Promise.reject(new Error(movies.Error));
        }
        setMovies(currentMovies => [...currentMovies, ...movies.Search]);
        setTotalMovies(Number(movies.totalResults));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [page, query, type]);

  return (
    <Container>
      <Title />
      <SearchForm onSearchMovie={searchMovie} />
      {movies.length > 1 ? (
        <MoviesDataView
          onLoadMore={loadMore}
          movies={movies}
          totalMovies={totalMovies}
          isLoading={loading}
        />
      ) : null}
      {loading && movies.length < 1 && <MoviesPendingView />}
      {error && <MoviesErrorView error={error} />}
    </Container>
  );
};

export default App;
