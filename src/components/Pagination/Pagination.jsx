import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../UI/Button';

const ButtonMore = styled(Button)`
  margin: 0 auto;
  display: flex;
`;

const Pagination = ({ moviesLength, totalMovies, onLoadMore, isLoading }) => {
  return (
    <>
      {moviesLength < totalMovies && (
        <ButtonMore onClick={onLoadMore} disabled={isLoading}>
          Load More {moviesLength} / {totalMovies}
        </ButtonMore>
      )}
    </>
  );
};

Pagination.propTypes = {
  moviesLength: PropTypes.number.isRequired,
  totalMovies: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Pagination;
