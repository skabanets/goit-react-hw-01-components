import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...user} title="User profile" />
      <Statistics statistics={statistics} title="Upload stats" />
      <FriendList friends={friends} title="Friends" />
      <TransactionHistory
        transactions={transactions}
        title="Transaction history"
      />
    </>
  );
};
