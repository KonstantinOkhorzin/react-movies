import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1000px;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
