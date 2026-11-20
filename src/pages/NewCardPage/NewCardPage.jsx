import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Header from '../../components/Header/Header.jsx';
import { Wrapper } from '../../App.styled.js';
import {
  NewCardWrapper, NewCardBlock, NewCardTitle, NewCardClose,
  NewCardRow, NewCardForm, NewCardBlockField, NewCardLabel,
  NewCardInput, NewCardArea, NewCardCalendar, NewCardCreateBtn,
} from './NewCardPage.styled.js';

export default function NewCardPage({ isDark, onThemeToggle, logout }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !date) return;
    navigate('/');
  };

  return (
    <Wrapper>
      <Header
        onNewCard={() => navigate('/new')}
        onExit={() => navigate('/exit')}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
        logout={logout}
      />
      <NewCardWrapper>
        <NewCardBlock>
          <NewCardTitle>Создание задачи</NewCardTitle>
          <NewCardClose type="button" onClick={() => navigate('/')}>✖</NewCardClose>
          <NewCardRow>
            <NewCardForm onSubmit={handleSubmit}>
              <NewCardBlockField>
                <NewCardLabel htmlFor="formTitle">Название задачи</NewCardLabel>
                <NewCardInput
                  id="formTitle"
                  type="text"
                  placeholder="Введите название задачи..."
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </NewCardBlockField>
              <NewCardBlockField>
                <NewCardLabel htmlFor="textArea">Описание задачи</NewCardLabel>
                <NewCardArea
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </NewCardBlockField>
            </NewCardForm>
            <NewCardCalendar>
              <Calendar selected={date} onChange={setDate} />
            </NewCardCalendar>
          </NewCardRow>
          <Categories selected={topic} onSelect={setTopic} />
          <NewCardCreateBtn type="button" onClick={handleSubmit}>
            Создать задачу
          </NewCardCreateBtn>
        </NewCardBlock>
      </NewCardWrapper>
    </Wrapper>
  );
}