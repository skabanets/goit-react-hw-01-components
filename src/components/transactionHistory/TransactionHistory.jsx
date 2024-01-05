import { Container } from 'components/container/Container.styled';
import { Section, SectionTitle } from 'components/section/Section.styled';
import { TransactionHistoryItem } from 'components/transactionHistoryItem/TransactionHistoryItem';
import {
  TableTitleCell,
  TransactionHistoryTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions, title }) => {
  return (
    <Section>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}

        <TransactionHistoryTable>
          <thead>
            <tr>
              <TableTitleCell>Type</TableTitleCell>
              <TableTitleCell>Amount</TableTitleCell>
              <TableTitleCell>Currency</TableTitleCell>
            </tr>
          </thead>
          <tbody>
            {transactions.map(el => (
              <TransactionHistoryItem key={el.id} {...el} />
            ))}
          </tbody>
        </TransactionHistoryTable>
      </Container>
    </Section>
  );
};
