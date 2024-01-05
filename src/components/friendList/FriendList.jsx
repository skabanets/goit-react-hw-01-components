import { Container } from 'components/container/Container.styled';
import { FriendListItem } from 'components/friendListItem/FriendListItem';
import { Section, SectionTitle } from 'components/section/Section.styled';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({ friends, title }) => {
  return (
    <Section>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        <ListFriends>
          {friends.map(el => (
            <FriendListItem key={el.id} {...el} />
          ))}
        </ListFriends>
      </Container>
    </Section>
  );
};
