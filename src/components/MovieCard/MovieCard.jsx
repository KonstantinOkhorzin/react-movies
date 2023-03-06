import PropTypes from 'prop-types';

import { Card, CardImg, CardContent, CardTitle, CardBottom } from './MovieCard.styled';

const MovieCard = ({ Poster: poster, Title: title, Type: type, Year: year, imdbID: id }) => {
  return (
    <Card to={id}>
      <CardImg src={poster} alt='' />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardBottom>
          <p>{year}</p>
          <p>{type}</p>
        </CardBottom>
      </CardContent>
    </Card>
  );
};

MovieCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
};

export default MovieCard;
