import styled from 'styled-components';

export const Form = styled.form`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

export const Input = styled.input`
  width: 100%;
  padding-top: ${({ theme }) => theme.space[3]}px;
  padding-bottom: ${({ theme }) => theme.space[3]}px;
  padding-left: ${({ theme }) => theme.space[4]}px;
  padding-right: ${({ theme }) => theme.space[4]}px;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  transition: ${({ theme }) => theme.animation.cubicBezier};
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
