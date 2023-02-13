import PropTypes from 'prop-types';

import MovieCard from '../MovieCard';
import {List, ButtonMore } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
    return (
      <>
        <List>
          {movies.map(({ imdbID: id, ...restProps }) => (
            <MovieCard key={id} {...restProps} />
          ))}
        </List>
        <ButtonMore>load more</ButtonMore>
      </>
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
