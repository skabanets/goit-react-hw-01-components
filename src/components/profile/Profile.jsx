import { Container } from 'components/container/Container.styled';
import { Section, SectionTitle } from 'components/section/Section.styled';
import {
  Avatar,
  StatItem,
  StatValue,
  Text,
  UserCard,
  UserDescription,
  UserInfo,
  UserName,
  UserStats,
  WrapperAvatar,
} from './Profile.styled';

export const Profile = ({ title, username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;

  return (
    <Section>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        <UserCard>
          <UserDescription>
            <WrapperAvatar>
              <Avatar src={avatar} alt="User avatar" />
            </WrapperAvatar>

            <UserInfo>
              <UserName>{username}</UserName>
              <Text>&#64;{tag}</Text>
              <Text>{location}</Text>
            </UserInfo>
          </UserDescription>

          <UserStats>
            <StatItem>
              <Text>Followers</Text>
              <StatValue>{followers}</StatValue>
            </StatItem>
            <StatItem>
              <Text>Views</Text>
              <StatValue>{likes}</StatValue>
            </StatItem>
            <StatItem>
              <Text>Likes</Text>
              <StatValue>{views}</StatValue>
            </StatItem>
          </UserStats>
        </UserCard>
      </Container>
    </Section>
  );
};
