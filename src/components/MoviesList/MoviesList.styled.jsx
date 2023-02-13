import styled from 'styled-components';

import Button from '../UI/Button';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space[4]}px;
  margin-top: ${({ theme }) => theme.space[5]}px;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;

export const ButtonMore = styled(Button)`
  margin: 0 auto;
  display: flex;
`;