import styled from 'styled-components';

export const CalendarWrap = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTtl = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const CalendarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  .nav__actions { display: flex; gap: 8px; }

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: pointer;
    font-size: 16px;
  }
`;

export const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 600;
`;

export const CalendarContent = styled.div`margin-bottom: 12px;`;

export const DaysNames = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 7px;
  margin: 7px 0;
`;

export const DayName = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Cells = styled.div`
  width: 182px;
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
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  opacity: ${({ $other }) => ($other ? 0 : 1)};
  background-color: ${({ $active, theme }) => ($active ? theme.colors.gray.bg : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.textMuted)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgInput};
  }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const Period = styled.div`
  padding: 0 7px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.textMuted};

  span { color: ${({ theme }) => theme.colors.textMain}; }
`;