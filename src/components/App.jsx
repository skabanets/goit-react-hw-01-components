import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import user from '../data/user.json';
import statistics from '../data/statistics.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics statistics={statistics} title="Upload stats" />
    </>
  );
};
