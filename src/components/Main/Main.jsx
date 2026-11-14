<<<<<<< HEAD
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
=======
// src/components/Main/Main.jsx
import Column from '../Column/Column';
import { Container } from '../../App.styled';
import { Main as MainStyled, MainBlock, MainContent } from './Main.styled';

const Main = ({ tasks, onCardView }) => {
  return (
    <MainStyled>
      <MainBlock>
        <Container>
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
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
<<<<<<< HEAD
        )}
      </Container>
    </MainBlock>
=======
        </Container>
      </MainBlock>
    </MainStyled>
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  );
}