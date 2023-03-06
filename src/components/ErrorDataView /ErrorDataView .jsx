import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.red};
`;

const ErrorDataView = ({ error }) => {
  return <Message>{error}</Message>;
};

ErrorDataView.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorDataView;
