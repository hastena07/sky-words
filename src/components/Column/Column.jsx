<<<<<<< HEAD
import Card from '../Card/Card.jsx';
import { ColumnBlock, ColumnTitle, Cards } from './Column.styled.js';
=======
import Card from '../Card/Card';
import { ColumnBlock, Title, Cards } from './Column.styled';
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6

export default function Column({ title, tasks, onCardClick }) {
  return (
    <ColumnBlock>
<<<<<<< HEAD
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks.map((task) => (
          <Card key={task.id} task={task} onClick={onCardClick} />
=======
      <Title>
        <p>{title}</p>
      </Title>
      <Cards>
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={() => onCardView(card)} />
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
        ))}
      </Cards>
    </ColumnBlock>
  );
}