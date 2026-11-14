// src/App.jsx
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Wrapper } from './App.styled';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ModalManager from './components/ModalManager/ModalManager';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

const INITIAL_TASKS = [
  {
    title: 'Без статуса',
    cards: [
      { id: 1, topic: '_orange', title: 'Название задачи', date: '30.10.25' },
      { id: 2, topic: '_purple', title: 'Собрать отзывы по макету', date: '31.10.25' },
    ],
  },
  {
    title: 'Нужно сделать',
    cards: [
      { id: 3, topic: '_green', title: ' Стилизовать интерфейс с помощью Styled Components', date: '01.11.25' },
    ],
  },
  { title: 'В работе',
     cards: [
       { id: 3, topic: '_green', title: 'Исследовать конкурентов', date: '01.11.25' },
      ] 
    },
  { title: 'Тестирование',
     cards: [{
       id: 4, topic: '_orange', title: 'Подобрать библиотеку для графиков', date: '30.10.25' },
      { id: 2, topic: '_purple', title: 'Собрать отзывы по макету', date: '31.10.25' },
    ] },
  { title: 'Готово', cards: [
    { id: 5, topic: '_purple', title: 'Написать текст для рассылки', date: '31.10.25' },
  ] },
];

  const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const theme = isDark ? themes.dark : themes.light;

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const openCard = (card) => {
    setCurrentCard(card);
    openModal('browse');
  };

  const createCard = ({ title, category, date }) => {
    const formattedDate = date
      ? new Date(date).toLocaleDateString('ru-RU')
      : '—';
    const newCard = { id: Date.now(), topic: category, title, date: formattedDate };
    setTasks((prev) =>
      prev.map((column, index) =>
        index === 0 ? { ...column, cards: [newCard, ...column.cards] } : column
      )
    );
  };

  const handleLogout = () => {
    closeModal();
    setAuthMode('signin');
    setIsAuthOpen(true);
  };

  if (isAuthOpen) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {authMode === 'signup' ? (
          <SignUp onSwitchMode={() => setAuthMode('signin')} onEnter={() => setIsAuthOpen(false)} />
        ) : (
          <SignIn onSwitchMode={() => setAuthMode('signup')} onEnter={() => setIsAuthOpen(false)} />
        )}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header
          userName="Ivan Ivanov"
          userEmail="user@test.ru"
          onUserClick={() => openModal('exit')}
          onNewCard={() => openModal('new-card')}
          isDark={isDark}
          onToggleTheme={() => setIsDark(!isDark)}
        />
        <Main tasks={tasks} onCardView={openCard} />
      </Wrapper>

      <ModalManager
        isOpen={isModalOpen}
        modalType={modalType}
        onClose={closeModal}
        onConfirmExit={handleLogout}
        onCreate={createCard}
        currentCard={currentCard}
      />
    </ThemeProvider>
  );
};

export default App;
