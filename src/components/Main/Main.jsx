import './Main.css'; 
import Column from '../Column/Column'; 

const Main = ({ onCardView }) => {
  return (
    <main className="Main">
      <div className="Container">
        <div className="Main__block">
          <div className="Main__content">
            {/* Колонки со статичными данными (в будущем заменим на данные из API) */}
             
              <Column 
                title="бЕЗ СТАТУСА"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
               />
                       
              <Column 
                title="НУЖНО СДЕЛАТЬ"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
               />
                     
             <Column 
                title="В РАБОТЕ"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
              />
                       
             <Column 
                title="ТЕСТИРОВАНИЕ"
                cards={[
                  { id: '1', title: "Задача 1", category: "_orange", date: "30.10.23" },
                  { id: '2', title: "Задача 2", category: "_green", date: "01.11.23" }
                ]}
                onCardView={onCardView}
              />
                     
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
    </main>
  );
};

export default Main;
