import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  line-height: ${({ theme }) => theme.lineHeights.heading};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
`;

const Title = () => {
  return <StyledTitle>Find your favorite movies</StyledTitle>;
};

export default Title;
