import styled from 'styled-components';

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px 0;
  width: calc(100% / 5);
  color: white;

  &:nth-child(1) {
    background-color: #02315e;
  }

  &:nth-child(2) {
    background-color: #00457e;
  }

  &:nth-child(3) {
    background-color: #2f70af;
  }

  &:nth-child(4) {
    background-color: #b9848c;
  }

  &:nth-child(5) {
    background-color: #806491;
  }
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
