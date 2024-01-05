import {
  Label,
  Percentage,
  StatisticItem,
} from 'components/statistics/Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatisticItem>
      <Label>{label}</Label>
      <Percentage>{percentage}&#37;</Percentage>
    </StatisticItem>
  );
};
