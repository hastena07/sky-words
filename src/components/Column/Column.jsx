import './Column.css'; // Подключаем стили для этой колонки
import Card from '../Card/Card'; // Импортируем компонент карточки (только один раз)

/**
 * Компонент Колонки на доске.
 *
 * @param {string} title - Заголовок колонки ("Нужно сделать", "В работе"...)
 * @param {object[]} cards - Массив объектов с задачами
 * @param {function} onCardView - Обработчик просмотра карточки
 */
// src/components/Column/Column.jsx
const Column = ({ title, cards, onCardView }) => {
  return (
    <div className="Column">
       <div className="Column__title">
         <p>{title}</p>
        </div> 
     
       <div className="Cards">
        {cards.length === 0 ? (
          <div className="Column__empty">Нет задач</div>
        ) : (
          cards.map((cardData) => (
            <div
              key={cardData.id || `${cardData.title}-${cardData.date}`}
              className="Cards__item"
            >
              <Card
                title={cardData.title}
                category={cardData.category}
                date={cardData.date}
                description={cardData.description} // если есть
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
