import {
  CalendarBox, Nav, NavActions, ActionBtn, Month,
  DaysNames, DayName, Cells, Cell, Period,
} from './Calendar.styled';

const WEEKDAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const CELLS = [
  { day: 28, otherMonth: true },
  { day: 29, otherMonth: true },
  { day: 30, otherMonth: true },
  { day: 31 },
  { day: 1 },
  { day: 2, weekend: true },
  { day: 3, weekend: true },
  { day: 4 },
  { day: 5 },
  { day: 6 },
  { day: 7 },
  { day: 8, current: true },
  { day: 9, weekend: true, activeDay: true },
  { day: 10, weekend: true },
  { day: 11 },
  { day: 12 },
  { day: 13 },
  { day: 14 },
  { day: 15 },
  { day: 16, weekend: true },
  { day: 17, weekend: true },
  { day: 18 },
  { day: 19 },
  { day: 20 },
  { day: 21 },
  { day: 22 },
  { day: 23, weekend: true },
  { day: 24, weekend: true },
  { day: 25 },
  { day: 26 },
  { day: 27 },
  { day: 28 },
  { day: 29 },
  { day: 30, weekend: true },
  { day: 1, otherMonth: true, weekend: true },
];

/**
  *
 * @param {string} month - Текущий месяц (например: "сентябрь")
 * @param {number} year - Текущий год (например: 2023)
 */
const Calendar = ({ month, year }) => {
  return (
    <CalendarBox>
      <Nav>
        {/* Сначала месяц, потом год — одним блоком слева */}
        <Month>{`${month} ${year}`}</Month>

        {/* Обе стрелки — справа */}
        <NavActions>
          <ActionBtn type="button" data-action="prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
              <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z"/>
            </svg>
          </ActionBtn>

          <ActionBtn type="button" data-action="next">
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
              <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z"/>
            </svg>
          </ActionBtn>
        </NavActions>
      </Nav>

      <DaysNames>
        {WEEKDAYS.map((day, index) => (
          <DayName key={day} $weekend={index >= 5}>
            {day}
          </DayName>
        ))}
      </DaysNames>

      <Cells>
        {CELLS.map((cell, index) => (
          <Cell
            key={index}
            $otherMonth={cell.otherMonth}
            $weekend={cell.weekend}
            $current={cell.current}
            $activeDay={cell.activeDay}
          >
            {cell.day}
          </Cell>
        ))}
      </Cells>

      <Period>Выберите срок исполнения.</Period>
    </CalendarBox>
  );
};

export default Calendar;
