import { FriendListItem } from 'components/friendListItem/FriendListItem';

export const FriendList = ({ friends, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {friends.map(el => (
          <FriendListItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};
