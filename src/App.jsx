// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Logo from './components/assets/logo.png';
import Main from './components/Main/Main';
import ModalManager from './components/ModalManager/ModalManager';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  /* === СОСТОЯНИЕ ПОЛЬЗОВАТЕЛЯ === */
  const [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem('kanban-user')) || null;
  });

  const handleLogin = (data) => {
    localStorage.setItem('kanban-user', JSON.stringify(data));
    setUserData(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('kanban-user');
    setUserData(null);
  };

  /* === ДАННЫЕ ЗАДАЧ === */
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
    const movingCard = updatedColumns[fromCol].cards.splice(fromIdx, 1)[0];
    updatedColumns[toCol].cards.push(movingCard);
    setTasks(updatedColumns);
  };

  /* === МОДАЛЬНЫЕ ОКНА (только для задач) === */
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

  /* === АВТОРИЗАЦИЯ === */
  const [isAuthPageOpen, setIsAuthPageOpen] = useState(!userData);
  const [isSignIn, setIsSignIn] = useState(true);

  const openAuthPage = () => setIsAuthPageOpen(true);
  const closeAuthPage = () => setIsAuthPageOpen(false);

  return (
    <div className="wrapper">
      <div className="Container">
        {/* Header теперь сам управляет своими модальными окнами */}
        {userData && (
          <>
            <Header
              userName={userData.name}
              userEmail={userData.email}
              onLogout={handleLogout} // Передаём функцию выхода напрямую
              onOpenAuth={openAuthPage}
              onNewCard={openNewCardPopup} // Передаём функцию создания задачи
            />

            {/* Main и модалки для задач остаются в App */}
            <Main 
              tasks={tasks}
              onMoveCard={moveCardBetweenColumns}
              onCardView={openBrowsePopup}
            />
          </>
        )}

        {!userData && isAuthPageOpen && (
          <>
            {isSignIn ? (
              <SignIn
                onSwitchToSignUp={() => setIsSignIn(false)}
                onSubmit={(data) => handleLogin({...data, name: 'Ivan Ivanov'})}
              />
            ) : (
              <SignUp
                onSwitchToSignIn={() => setIsSignIn(true)}
                onSubmit={(data) => handleLogin({...data, name: 'Ivan Ivanov'})}
              />
            )}
          </>
        )}

        {/* ModalManager теперь отвечает только за карточки задач */}
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
    </div>
  );
}

export default App;