import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
`;

const Title = () => {
  return <StyledTitle>Find your favorite movies</StyledTitle>;
};

export default Title;
