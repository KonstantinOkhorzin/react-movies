import PropTypes from 'prop-types';

import MovieCard from '../MovieCard';
import { List } from './MovieList.styled';

const MoviesList = ({ movies}) => {
  return (
    <List>
      {movies.map(({ imdbID: id, ...restProps }) => (
        <MovieCard key={id} {...restProps} />
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
