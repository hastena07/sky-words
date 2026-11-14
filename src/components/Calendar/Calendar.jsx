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

  const currentDay = 8;

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
        <CalendarMonth>{MONTHS[cursor.month]} {cursor.year}</CalendarMonth>
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