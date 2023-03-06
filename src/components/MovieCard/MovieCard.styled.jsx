import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(310px, auto) auto;
  box-shadow: ${({ theme }) => theme.shadows.small};
  border-radius: ${({ theme }) => theme.radii.normal};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};
  transform: scale(1);

  :hover,
  :focus-visible {
    transform: scale(1.03);
  }
`;

export const CardImg = styled.img`
  width: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]}px;
  padding: ${({ theme }) => theme.space[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CardTitle = styled.h3`
  flex: 1 1 auto;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
`;