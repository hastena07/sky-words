import './Column.css';
import Card from '../Card/Card';

const Column = ({ title, cards, onCardView }) => {
  return (
    <div className="Main__column">
      <div>
        <p className="Column__title">{title}</p>
      </div>

      <div className="Cards">
        {cards.length === 0 ? (
          <div className="Column__empty">Нет задач</div>
        ) : (
          cards.map((cardData) => (
            <div key={cardData.id} className="Cards__item">
              <Card
                title={cardData.title}
                category={cardData.topic}        
                date={cardData.date}
                onView={() => onCardView(cardData)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Column;