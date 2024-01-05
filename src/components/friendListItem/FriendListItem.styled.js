import styled from 'styled-components';

export const ListFriendsItem = styled.li`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background-color: #cfcbc8;
  border-radius: 10px;
`;

export const StatusBox = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.$bg};
`;

export const FriendAvatar = styled.img`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #e7ecf1;
  background-color: white;
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;
