// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Logo from './components/assets/logo.png';
import Main from './components/Main/Main';
import ModalManager from './components/ModalManager/ModalManager';

// SignIn и SignUp полностью удалены

// ТЕСТОВЫЕ ДАННЫЕ: готовые карточки
const initialCards = [
  { id: 1, title: 'Настроить CI/CD', description: 'Настроить GitHub Actions для деплоя', category: 'DevOps', date: '2025-12-10', status: '' },
  { id: 2, title: 'Исправить баг с 404', description: 'Страница /likes возвращает 404 — найти причину', category: 'Bug', date: '2025-12-09', status: '' },
  { id: 3, title: 'Добавить модальное окно', description: 'Реализовать ModalManager для просмотра карточки', category: 'Feature', date: '2025-12-11', status: '' }
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // ДАННЫЕ ЗАДАЧ
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('kanban-tasks'));
    if (saved) return saved;


    return [
      { title: 'Без статуса', cards: [] },
      { 
        title: 'Нужно сделать', 
        cards: [...initialCards] 
      },
      { title: 'В работе', cards: [] },
      { title: 'Тестирование', cards: [] },
      { title: 'Готово', cards: [] }
    ];
  });

  useEffect(() => {
    localStorage.setItem('kanban-tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Имитация загрузки данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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