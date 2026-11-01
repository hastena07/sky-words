// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Logo from './components/assets/logo.png';
import Main from './components/Main/Main';
import ModalManager from './components/ModalManager/ModalManager';

// SignIn и SignUp полностью удалены

function App() {
   const [isLoading, setIsLoading] = useState(true);
  // ДАННЫЕ ЗАДАЧ
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('kanban-tasks')) || [
      { title: "Без статуса", cards: [] },
      { title: "Нужно сделать", cards: [] },
      { title: "В работе", cards: [] },
      { title: "Тестирование", cards: [] },
      { title: "Готово", cards: [] }
    ];
  });

  

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTaskToColumn = (columnIndex, newCard) => {
    const updatedColumns = [...tasks];
    updatedColumns[columnIndex].cards.push(newCard);
    setTasks(updatedColumns);
  };

  const moveCardBetweenColumns = (fromCol, toCol, cardId) => {
    const updatedColumns = [...tasks];
    const fromIdx = updatedColumns[fromCol].cards.findIndex(card => card.id === cardId);
    if (fromIdx === -1) return;
    const [movingCard] = updatedColumns[fromCol].cards.splice(fromIdx, 1);
    updatedColumns[toCol].cards.push(movingCard);
    setTasks(updatedColumns);
  };

  //  (только для задач)
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

  // АВТОРИЗАЦИЯ — ПОЛНОСТЬЮ УДАЛЕНА

  return (
    <div className="Wrapper">
      {/* 
        Теперь приложение всегда рендерит Header и Main.
        Никакой проверки пользователя не требуется.
      */}
      <Header
        // Поскольку пользователя нет, передаём заглушки
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
            title,
            description: '',
            category,
            date,
            status: ''
          };
          addTaskToColumn(currentColumnForNewCard, newCard);
          closeModal();
        }}
      />
    </div>
  );
}

export default App;