// src/components/Main/Main.jsx
import './Main.css';
import Column from '../Column/Column';

const Main = ({ tasks, onCardView }) => {
  return (
    <main className="Main">
      <div className="Container">
        <div className="Main__block">
          <div className="Main__content">
            {tasks.map((column, index) => (
              <Column
                key={column.title}
                title={column.title}
                cards={column.cards}
                onCardView={onCardView}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
