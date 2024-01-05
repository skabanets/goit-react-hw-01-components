import { StatisticsItem } from 'components/statisticsItem/StatisticsItem';

export const Statistics = ({ statistics, title }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {statistics.map(el => (
          <StatisticsItem key={el.id} {...el} />
        ))}
      </ul>
    </section>
  );
};
