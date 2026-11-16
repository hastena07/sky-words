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
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  .nav__actions { display: flex; align-items: center; }

  button {
    width: 18px;
    height: 25px;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: pointer;
    font-size: 16px;
  }
`;

export const CalendarMonth = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarContent = styled.div`margin-bottom: 12px;`;

export const DaysNames = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.2px;

  @media screen and (max-width: 660px) { font-size: 14px; }
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
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  font-weight: ${({ $current }) => ($current ? 700 : 400)};
  opacity: ${({ $other }) => ($other ? 0 : 1)};
  pointer-events: ${({ $other }) => ($other ? 'none' : 'auto')};
  background-color: ${({ $active, theme }) => ($active ? theme.colors.gray.bg : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.textMuted)};

  &:hover { background-color: ${({ theme }) => theme.colors.bgInput}; }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const Period = styled.div`
  padding: 0 7px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 10px;
  line-height: 1;

  span { color: ${({ theme }) => theme.colors.textMain}; }

  @media screen and (max-width: 660px) { font-size: 14px; }
`;