import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  width: 750px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  margin: 0 auto;
`;

export const TableTitleCell = styled.th`
  color: white;
  background-color: #0ba5be;
  padding: 20px 0;
  font-size: 18px;
  font-weight: 700;
  width: calc(100% / 3);
  text-transform: uppercase;
`;
