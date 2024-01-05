import styled from 'styled-components';

export const TableRow = styled.tr`
  font-size: 16px;
  font-weight: 500;
  background-color: white;
  color: #536b69;
  &:nth-child(even) {
    background-color: #f3f6f9;
  }
`;

export const TableRowCell = styled.td`
  padding: 20px 0;
  text-align: center;

  &:nth-child(1)::first-letter {
    text-transform: uppercase;
  }
`;
