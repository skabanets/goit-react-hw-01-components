import styled from 'styled-components';

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: 1s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.light};
  padding: ${({ theme }) => theme.spacing(8)} 0;
`;

export const WrapperAvatar = styled.div`
  width: 200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid #e7ecf1;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const Avatar = styled.img`
  width: 100%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #96aab7;
`;

export const UserStats = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3f6f9;
  list-style: none;
  border-top: 2px solid #e7ecf1;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  gap: 5px;
  width: calc(100% / 3);
  border-right: 2px solid #e7ecf1;

  &:nth-last-child(1) {
    border-right: none;
  }
`;

export const StatValue = styled.p`
  font-weight: 500;
`;
