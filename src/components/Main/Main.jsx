import './Main.css'; // Локальные стили этого компонента 
import Column from '../Column/Column'; // Одна колонка задач

/**
 * Основной компонент доски (Kanban).
 *
 * Примечание: модальные окна здесь НЕ рендерятся. Они управляются в App через ModalManager.
 */
const Main = ({ onCardView }) => {
  return (
    <main className="Main">
      <div className="Container">
        <div className="Main__block">
          <div className="Main__content">
            {/* Колонки со статичными данными (в будущем заменим на данные из API) */}
             <Column 
                title="БЕЗ СТАТУСА"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
              />
            <div className="Main__column">
              <Column 
                title="НУЖНО СДЕЛАТЬ"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
               />
            </div>
            <div className="Main__column">
             <Column 
                title="В РАБОТЕ"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
              />
            </div>
              
            
              <div className="Main__column">
             <Column 
                title="ТЕСТИРОВАНИЕ"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
              />
            </div>
              <div className="Main__column">
             <Column 
                title="ГОТОВО"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
              />
            </div>
            
          </div>
        </div>
      </div>   
    </main>
  );
};

export default Main;
