// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Logo from './components/assets/logo.png';
import Main from './components/Main/Main';
import ModalManager from './components/ModalManager/ModalManager';
import { initialCards } from './data.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  const [tasks, setTasks] = useState(() => [
    { title: 'Без статуса', cards: [] },
    { title: 'Нужно сделать', cards: [] },
    { title: 'В работе', cards: [] },
    { title: 'Тестирование', cards: [] },
    { title: 'Готово', cards: [] }
  ]);

  // Имитация загрузки данных 
  useEffect(() => {
    const timer = setTimeout(() => {
      setTasks((prevTasks) => {
        const updated = prevTasks.map((column) => ({
          ...column,
          cards: initialCards.filter(
            (card) => card.status === column.title
          )
        }));
        return updated;
      });
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const addTaskToColumn = (columnIndex, newCard) => {
    setTasks((prevTasks) => {
      const updatedColumns = prevTasks.map((column, index) =>
        index === columnIndex
          ? { ...column, cards: [...column.cards, newCard] }
          : column
      );
      return updatedColumns;
    });
  };

  const moveCardBetweenColumns = (fromCol, toCol, cardId) => {
    setTasks((prevTasks) => {
      const updatedColumns = prevTasks.map((column) => ({
        ...column,
        cards: [...column.cards]
      }));
      const fromIdx = updatedColumns[fromCol].cards.findIndex(
        (card) => card.id === cardId
      );
      if (fromIdx === -1) return prevTasks;
      const [movingCard] = updatedColumns[fromCol].cards.splice(fromIdx, 1);
      updatedColumns[toCol].cards.push(movingCard);
      return updatedColumns;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentCard, setCurrentCard] = useState(null);
  const [currentColumnForNewCard, setCurrentColumnForNewCard] = useState(0);

  const openNewCardPopup = (columnIndex) => {
    setCurrentColumnForNewCard(columnIndex);
    setIsModalOpen(true);
    setModalType('new-card');
  };

  const openBrowsePopup = (cardData) => {
    setCurrentCard(cardData);
    setIsModalOpen(true);
    setModalType('browse');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
    setCurrentCard(null);
  };

  if (isLoading) {
    return (
      <div className="Wrapper loading-state">
        <div className="loading-message">Данные загружаются</div>
      </div>
    );
  }

  return (
    <div className="Wrapper">
      <Header
        userName="Ivan Ivanov"
        userEmail="Ivan.Ivanov@mail.com"
        onNewCard={openNewCardPopup}
      />

      <Main
        tasks={tasks}
        onMoveCard={moveCardBetweenColumns}
        onCardView={openBrowsePopup}
      />

      <ModalManager
        isOpen={isModalOpen}
        modalType={modalType}
        currentCard={currentCard}
        onClose={closeModal}
        onCreate={(title, category, date) => {
          const newCard = {
            id: Date.now(),
            topic: category,
            title,
            description: '',
            date,
            status: tasks[currentColumnForNewCard].title
          };
          addTaskToColumn(currentColumnForNewCard, newCard);
          closeModal();
        }}
      />
    </div>
  );
}

export default App;
