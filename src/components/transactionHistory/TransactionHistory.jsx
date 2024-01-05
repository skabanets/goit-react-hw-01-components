import { TransactionHistoryItem } from 'components/transactionHistoryItem/TransactionHistoryItem';

export const TransactionHistory = ({ transactions, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(el => (
            <TransactionHistoryItem key={el.id} {...el} />
          ))}
        </tbody>
      </table>
    </section>
  );
};
