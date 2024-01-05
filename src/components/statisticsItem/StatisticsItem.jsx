export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{percentage}&#37;</span>
    </li>
  );
};
