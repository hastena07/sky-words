import Card from '../Card/Card';
import { ColumnBlock, Title, Cards } from './Column.styled';

const Column = ({ title, cards, onCardView }) => {
  return (
    <ColumnBlock>
      <Title>
        <p>{title}</p>
      </Title>
      <Cards>
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={() => onCardView(card)} />
        ))}
      </Cards>
    </ColumnBlock>
  );
};

export default Column;
