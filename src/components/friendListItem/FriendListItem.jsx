export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      {isOnline ? (
        <span data-online="online"></span>
      ) : (
        <span data-online="onfline"></span>
      )}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
