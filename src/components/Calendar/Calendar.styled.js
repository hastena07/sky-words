// src/components/Calendar/Calendar.styled.js
import styled from 'styled-components';

export const CalendarBox = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

/* Шапка календаря: месяц слева, стрелки справа */
export const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

/* Группа обеих стрелок справа (бывший .nav__actions) */
export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionBtn = styled.button`
  width: 18px;
  height: 25px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.textGray};
  }
`;

export const Month = styled.div`
  color: ${({ theme }) => theme.textGray};
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

/* $weekend — выходной день недели (сб, вс) */
export const DayName = styled.div`
  color: ${({ $weekend, theme }) => ($weekend ? theme.textWeekend : theme.textGray)};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${({ $weekend, $activeDay, theme }) => {
    if ($activeDay) return theme.activeDayText;
    return $weekend ? theme.textWeekend : theme.textGray;
  }};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  opacity: ${({ $otherMonth }) => ($otherMonth ? 0 : 1)};
  font-weight: ${({ $current }) => ($current ? 700 : 400)};
  background-color: ${({ $activeDay, theme }) =>
    $activeDay ? theme.textGray : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.cellHoverBg};
  }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.textGray};
  font-size: 10px;
  line-height: 1;
  margin: 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
    font-size: 14px;
  }
`;
