import {
  CardWrap, CardBox, CardGroup, CardTheme, CardThemeText, CardBtn,
  CardContent, CardLink, CardTitle, CardDate,
} from './Card.styled.js';

const topicKey = {
  'Web Design': 'orange',
  Research: 'green',
  Copywriting: 'purple',
};

export default function Card({ task, onClick }) {
  const topic = topicKey[task.topic];

  const handleOpen = (e) => {
    e.preventDefault();
    onClick?.(task);
  };

  return (
    <CardWrap>
      <CardBox>
        <CardGroup>
          <CardTheme $topic={topic}>
            <CardThemeText $topic={topic}>{task.topic}</CardThemeText>
          </CardTheme>
          <CardBtn type="button" aria-label="Открыть задачу" onClick={handleOpen}>
            <span /><span /><span />
          </CardBtn>
        </CardGroup>
        <CardContent>
          <CardLink href="#" onClick={handleOpen}>
            <CardTitle>{task.title}</CardTitle>
          </CardLink>
          <CardDate>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
              <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125M9.75 1.21875V2.03125" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>{task.date}</p>
          </CardDate>
        </CardContent>
      </CardBox>
    </CardWrap>
  );
}