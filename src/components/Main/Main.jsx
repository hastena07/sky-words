// src/components/Main/Main.jsx
import Column from '../Column/Column';
import { Container } from '../../App.styled';
import { Main as MainStyled, MainBlock, MainContent } from './Main.styled';

const Main = ({ tasks, onCardView }) => {
  return (
    <MainStyled>
      <MainBlock>
        <Container>
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
        </Container>
      </MainBlock>
    </MainStyled>
  );
};

export default Main;
