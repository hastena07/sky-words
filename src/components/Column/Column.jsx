import Card from '../Card/Card.jsx';
import { ColumnBlock, ColumnTitle, Cards } from './Column.styled.js';

export default function Column({ title, tasks, onCardClick }) {
  return (
    <ColumnBlock>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {tasks.map((task) => (
          <Card key={task.id} task={task} onClick={onCardClick} />
        ))}
      </Cards>
    </ColumnBlock>
  );
}