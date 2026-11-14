import { TOPIC_NAMES } from '../../theme';
import {
  CardItem, CardBox, CardGroup, CardTheme,
  CardBtn, CardContent, CardTitle, CardDate, CardDateText,
} from './Card.styled';

const Card = ({ card, onCardClick }) => {
  return (
    <CardItem>
      <CardBox onClick={onCardClick}>
        <CardGroup>
          <CardTheme $class={card.topic}>
            <p>{TOPIC_NAMES[card.topic] || 'Без темы'}</p>
          </CardTheme>
          <CardBtn>
            <div />
            <div />
            <div />
          </CardBtn>
        </CardGroup>

        {/* Название и дата в одном блоке */}
        <CardContent>
          <CardTitle>{card.title}</CardTitle>

          <CardDate>
            <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="2" width="12" height="10.5" rx="1.5" fill="none" stroke="#94A6BE" />
              <path d="M3.5 0.5V3.5M9.5 0.5V3.5" stroke="#94A6BE" />
              <path d="M0.5 5.5H12.5" stroke="#94A6BE" />
            </svg>
            <CardDateText>{card.date}</CardDateText>
          </CardDate>
        </CardContent>
      </CardBox>
    </CardItem>
  );
};

export default Card;
