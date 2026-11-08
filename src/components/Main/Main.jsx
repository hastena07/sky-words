// src/components/Main/Main.jsx
import Column from '../Column/Column';
import { Container } from '../../App.styled';
import { MainBlock as MainStyled, MainInner, MainContent } from './Main.styled';

const Main = ({ tasks, onMoveCard, onCardView }) => {
  return (
    <MainStyled>
      <Container>
        <MainInner>
          <MainContent>
            {tasks.map((column, index) => (
              <Column
                key={column.title}
                title={column.title}
                cards={column.cards}
                onCardView={onCardView}
              />
            ))}
          </MainContent>
        </MainInner>
      </Container>
    </MainStyled>
  );
};

export default Main;
