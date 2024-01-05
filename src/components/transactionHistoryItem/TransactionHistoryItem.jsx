import { TableRow, TableRowCell } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <TableRowCell>{type}</TableRowCell>
      <TableRowCell>{amount}</TableRowCell>
      <TableRowCell>{currency}</TableRowCell>
    </TableRow>
  );
};
