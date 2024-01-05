import { Container } from 'components/container/Container.styled';
import { Section, SectionTitle } from 'components/section/Section.styled';
import { StatisticsItem } from 'components/statisticsItem/StatisticsItem';
import { StatisticList } from './Statistics.styled';

export const Statistics = ({ statistics, title }) => {
  return (
    <Section>
      <Container>
        {title && <SectionTitle>{title}</SectionTitle>}
        <StatisticList>
          {statistics.map(el => (
            <StatisticsItem key={el.id} {...el} />
          ))}
        </StatisticList>
      </Container>
    </Section>
  );
};
