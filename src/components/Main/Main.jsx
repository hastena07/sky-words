import { useMemo } from 'react';
import Column from '../Column/Column.jsx';
import { statuses } from '../../data.js';
import { MainBlock, MainContent, Loading } from './Main.styled.js';
import { Container } from '../../App.styled.js';

export default function Main({ tasks, isLoading, onCardClick }) {
  const grouped = useMemo(() => {
    const map = Object.fromEntries(statuses.map((s) => [s, []]));
    tasks.forEach((t) => map[t.status]?.push(t));
    return map;
  }, [tasks]);

  return (
    <MainBlock>
      <Container>
        {isLoading ? (
          <Loading>Данные загружаются...</Loading>
        ) : (
          <MainContent>
            {statuses.map((status) => (
              <Column
                key={status}
                title={status}
                tasks={grouped[status]}
                onCardClick={onCardClick}
              />
            ))}
          </MainContent>
        )}
      </Container>
    </MainBlock>
  );
}