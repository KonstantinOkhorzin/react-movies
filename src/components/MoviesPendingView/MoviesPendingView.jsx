import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = styled.div`
    display: flex;
    justify-content: center;
`

const MoviesPendingView = () => {
  return (
    <Spinner>
      <CircularProgress />
    </Spinner>
  );
};

export default MoviesPendingView;
