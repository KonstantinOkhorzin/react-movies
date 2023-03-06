import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.space[4]}px;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;
