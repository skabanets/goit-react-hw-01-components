import {
  Label,
  Percentage,
  StatisticItem,
} from 'components/statisticsItem/StatisticsItem.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatisticItem>
      <Label>{label}</Label>
      <Percentage>{percentage}&#37;</Percentage>
    </StatisticItem>
  );
};
