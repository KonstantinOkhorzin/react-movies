import React from 'react';

import MovieList from '../MovieList';
import Pagination from '../Pagination';

const MoviesDataView = ({ movies, totalMovies, onLoadMore, isLoading }) => {
  return (
    <div>
      <MovieList movies={movies} />
      <Pagination
        moviesLength={movies.length}
        totalMovies={totalMovies}
        onLoadMore={onLoadMore}
        isLoading={isLoading}
      />
    </div>
  );
};

export default MoviesDataView;
