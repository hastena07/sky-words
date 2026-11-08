import Card from '../Card/Card';
import { CardItem } from '../Card/Card.styled';
import { ColumnBlock, ColumnTitle, CardsWrap, Empty } from './Column.styled';

const Column = ({ title, cards, onCardView }) => {
  return (
    <ColumnBlock>
      <div>
        <ColumnTitle>{title}</ColumnTitle>
      </div>

      <CardsWrap>
        {cards.length === 0 ? (
          <Empty>Нет задач</Empty>
        ) : (
          cards.map((cardData) => (
            <CardItem key={cardData.id}>
              <Card
                title={cardData.title}
                category={cardData.topic}
                date={cardData.date}
                onView={() => onCardView(cardData)}
              />
            </CardItem>
          ))
        )}
      </CardsWrap>
    </ColumnBlock>
  );
};

export default Column;
