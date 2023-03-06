import { useState, useEffect } from 'react';

import Title from '../../components/Title';
import Container from '../../components/UI/Container';
import SearchForm from '../../components/SearchForm';
import MoviesDataView from '../../components/MoviesDataView';
import PendingDataView from '../../components/PendingDataView';
import ErrorDataView from '../../components/ErrorDataView ';

import moviesApi from '../../services/omdb-api';

const Movies = () => {
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
      {loading && movies.length < 1 && <PendingDataView />}
      {error && <ErrorDataView error={error} />}
    </Container>
  );
};

export default Movies;
