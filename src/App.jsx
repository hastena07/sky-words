import { useState, useEffect } from 'react';
import { Wrapper, LoadingState, LoadingMessage } from './App.styled';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ModalManager from './components/ModalManager/ModalManager';
import { initialCards } from './data'; 

const COLUMNS = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово',
];

function App() {
  const [isLoading, setLoading] = useState(true);

  const [tasks, setTasks] = useState(
    COLUMNS.map((title) => ({
      title,
      cards: initialCards.filter((card) => card.status === title),
    }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [currentCard, setCurrentCard] = useState(null);
  const [currentColumnForNewCard, setCurrentColumnForNewCard] = useState(0);

  const openNewCardPopup = (columnIndex) => {
    setCurrentColumnForNewCard(columnIndex);
    setModalType('new-card');
    setIsModalOpen(true);
  };

  const openBrowsePopup = (cardData) => {
    setCurrentCard(cardData);
    setModalType('browse');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
    setCurrentCard(null);
  };

  const addTaskToColumn = (columnIndex, newCard) => {
    setTasks((prevTasks) =>
      prevTasks.map((column, index) =>
        index === columnIndex
          ? { ...column, cards: [...column.cards, newCard] }
          : column
      )
    );
  };

  const createCard = (title, topic, date) => {
    const newCard = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      topic,
      title,
      description: '',
      date,
      status: tasks[currentColumnForNewCard].title,
    };
    addTaskToColumn(currentColumnForNewCard, newCard);
    closeModal();
  };

  const moveCardBetweenColumns = (fromCol, toCol, cardId) => {
    setTasks((prevTasks) => {
      const updatedColumns = prevTasks.map((column) => ({
        ...column,
        cards: [...column.cards],
      }));
      const fromIdx = updatedColumns[fromCol].cards.findIndex(
        (card) => card.id === cardId
      );
      if (fromIdx === -1 || fromCol === toCol) return prevTasks;
      const [movingCard] = updatedColumns[fromCol].cards.splice(fromIdx, 1);
      updatedColumns[toCol].cards.push(movingCard);
      return updatedColumns;
    });
  };

  if (isLoading) {
    return (
      <LoadingState>
        <LoadingMessage>Данные загружаются</LoadingMessage>
      </LoadingState>
    );
  }

  return (
    <Wrapper>
      <Header
        userName="Ivan Ivanov"
        userEmail="Ivan.Ivanov@mail.com"
        onLogout={() => console.log('Выход из аккаунта')}
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
        onCreate={createCard}
      />
    </Wrapper>
  );
}

export default App;
