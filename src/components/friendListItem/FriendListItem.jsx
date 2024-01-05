import {
  FriendAvatar,
  FriendName,
  ListFriendsItem,
  StatusBox,
} from 'components/friendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListFriendsItem>
      <StatusBox $bg={isOnline ? 'green' : 'red'}></StatusBox>
      <FriendAvatar src={avatar} alt="User avatar" width="48" />

      <FriendName>{name}</FriendName>
    </ListFriendsItem>
  );
};
