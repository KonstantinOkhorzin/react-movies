import styled from "styled-components";

import { StyledButton } from '../UI/Button/Button';

export const StyledFilterPanel = styled.div`
  margin-top: ${({ theme }) => theme.space[2]}px;
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space[1]}px;
`;

export const InputRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  margin: -1px;
  :checked + ${StyledButton} {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
  :focus + ${StyledButton} {
    box-shadow: ${({ theme }) => theme.shadows.outline};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
  }
`;
