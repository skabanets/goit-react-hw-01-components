import styled from 'styled-components';

export const StatisticList = styled.ul`
  width: 300px;
  list-style: none;
  display: flex;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;
