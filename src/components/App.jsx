import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics statistics={statistics} title="Upload stats" />
      <FriendList friends={friends} title="Friends" />
    </>
  );
};
