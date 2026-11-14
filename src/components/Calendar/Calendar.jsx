<<<<<<< HEAD
import { useState, useMemo } from 'react';
import {
  CalendarWrap, CalendarTtl, CalendarNav, CalendarMonth, CalendarContent,
  DaysNames, DayName, Cells, Cell, Period,
} from './Calendar.styled.js';

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < startDay; i++) {
    const d = new Date(year, month, i - startDay + 1);
    cells.push({ day: d.getDate(), other: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, other: false });
  }
  const total = Math.ceil((startDay + daysInMonth) / 7) * 7;
  while (cells.length < total) {
    const d = cells.length - startDay - daysInMonth + 1;
    cells.push({ day: d, other: true });
  }
  return cells;
}

const pad = (n) => String(n).padStart(2, '0');

export default function Calendar({ selected, onChange, readOnly = false }) {
  const [cursor, setCursor] = useState({ year: 2023, month: 8 });
  const cells = useMemo(() => buildMonth(cursor.year, cursor.month), [cursor]);

  const currentDay = 8; // демо: «сегодня» = 8.09.2023

  const shift = (delta) => {
    setCursor((prev) => {
      const m = prev.month + delta;
      return {
        year: prev.year + Math.floor(m / 12),
        month: ((m % 12) + 12) % 12,
      };
    });
  };

  const period = selected
    ? `${pad(selected)}.${pad(cursor.month + 1)}.${String(cursor.year).slice(-2)}`
    : null;

  return (
    <CalendarWrap>
      <CalendarTtl>Даты</CalendarTtl>
      <CalendarNav>
        <CalendarMonth>
          {MONTHS[cursor.month]} {cursor.year}
        </CalendarMonth>
        <div className="nav__actions">
          <button type="button" onClick={() => shift(-1)} aria-label="Предыдущий месяц">‹</button>
          <button type="button" onClick={() => shift(1)} aria-label="Следующий месяц">›</button>
        </div>
      </CalendarNav>
      <CalendarContent>
        <DaysNames>
          {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d) => (
            <DayName key={d}>{d}</DayName>
          ))}
        </DaysNames>
        <Cells>
          {cells.map((c, idx) => (
            <Cell
              key={c.other ? `o-${idx}` : c.day}
              $other={c.other}
              $active={!c.other && selected === c.day}
              $current={!c.other && c.day === currentDay}
              onClick={() => !c.other && !readOnly && onChange?.(c.day)}
            >
              {c.day}
            </Cell>
          ))}
        </Cells>
      </CalendarContent>
      <Period>
        {period ? (
          <>Срок исполнения: <span>{period}</span></>
        ) : (
          <>Выберите срок исполнения <span /></>
        )}
      </Period>
    </CalendarWrap>
  );
}
=======
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

      {/* Дни месяца */}
      <div className="Calendar__cells">
       <div className="Calendar__cell _other-month">28</div>
       <div className="Calendar__cell _other-month">29</div>
       <div className="Calendar__cell _other-month">30</div>
       <div className="Calendar__cell _cell-day">31</div>
       <div className="Calendar__cell _cell-day">1</div>
       <div className="Calendar__cell _cell-day _weekend">2</div>
       <div className="Calendar__cell _cell-day _weekend">3</div>
       <div className="Calendar__cell _cell-day">4</div>
       <div className="Calendar__cell _cell-day">5</div>
       <div className="Calendar__cell _cell-day ">6</div>
       <div className="Calendar__cell _cell-day">7</div>
       <div className="Calendar__cell _cell-day _current">8</div>
       <div className="Calendar__cell _cell-day _weekend _active-day">9</div>
       <div className="Calendar__cell _cell-day _weekend">10</div>
       <div className="Calendar__cell _cell-day">11</div>
       <div className="Calendar__cell _cell-day">12</div>
       <div className="Calendar__cell _cell-day">13</div>
       <div className="Calendar__cell _cell-day">14</div>
       <div className="Calendar__cell _cell-day">15</div>
       <div className="Calendar__cell _cell-day _weekend">16</div>
       <div className="Calendar__cell _cell-day _weekend">17</div>
       <div className="Calendar__cell _cell-day">18</div>
       <div className="Calendar__cell _cell-day">19</div>
       <div className="Calendar__cell _cell-day">20</div>
       <div className="Calendar__cell _cell-day">21</div>
       <div className="Calendar__cell _cell-day">22</div>
       <div className="Calendar__cell _cell-day _weekend">23</div>
       <div className="Calendar__cell _cell-day _weekend">24</div>
       <div className="Calendar__cell _cell-day">25</div>
       <div className="Calendar__cell _cell-day">26</div>
       <div className="Calendar__cell _cell-day">27</div>
       <div className="Calendar__cell _cell-day">28</div>
       <div className="Calendar__cell _cell-day">29</div>
       <div className="Calendar__cell _cell-day _weekend">30</div>
       <div className="Calendar__cell _other-month _weekend">1</div>
      </div>

      {/* Вывод даты под календарём */}
      <input type="hidden" 
        id="datepick_value"
        value={`${new Date().toLocaleDateString('ru-RU')}`} />
      <p className="Calendar__period date-end">
        Выберите срок исполнения{' '}
        <span className="date-control"></span>.
      </p>
    </div>
  );
};

export default Calendar;
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
