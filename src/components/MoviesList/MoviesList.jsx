import PropTypes from 'prop-types';

import MovieCard from '../MovieCard';
import { List, ButtonMore } from './MoviesList.styled';

const MoviesList = ({ movies, totalMovies}) => {
  return (
    <>
      <List>
        {movies.map(({ imdbID: id, ...restProps }) => (
          <MovieCard key={id} {...restProps} />
        ))}
      </List>
      {movies.length !== totalMovies && <ButtonMore>load more</ButtonMore>}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalMovies: PropTypes.number.isRequired,
};

export default MoviesList;
