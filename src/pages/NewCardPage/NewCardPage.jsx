import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import { createTask } from '../../services/tasks.js';
import {
  NewCardWrapper, NewCardBlock, NewCardTitle, NewCardClose,
  NewCardRow, NewCardForm, NewCardBlockField, NewCardLabel,
  NewCardInput, NewCardArea, NewCardCalendar, NewCardCreateBtn,
  NewCardError,
} from './NewCardPage.styled.js';

export default function NewCardPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');
  const [date, setDate] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const close = () => navigate('/');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!title.trim() || !date) {
      setError('Заполните название и выберите дату');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await createTask({
        title: title.trim(),
        description: description.trim(),
        topic,
        status: 'Без статуса',
        date: new Date(2023, 8, date).toISOString(),
      });
      close();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewCardWrapper onClick={close}>
      <NewCardBlock onClick={(e) => e.stopPropagation()}>
        <NewCardTitle>Создание задачи</NewCardTitle>
        <NewCardClose type="button" onClick={close}>✖</NewCardClose>
        {error && <NewCardError>{error}</NewCardError>}
        <NewCardRow>
          <NewCardForm onSubmit={handleSubmit}>
            <NewCardBlockField>
              <NewCardLabel htmlFor="formTitle">Название задачи</NewCardLabel>
              <NewCardInput
                id="formTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите название задачи..."
                autoFocus
              />
            </NewCardBlockField>
            <NewCardBlockField>
              <NewCardLabel htmlFor="textArea">Описание задачи</NewCardLabel>
              <NewCardArea
                id="textArea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Введите описание задачи..."
              />
            </NewCardBlockField>
          </NewCardForm>
          <NewCardCalendar>
            <Calendar selected={date} onChange={setDate} />
          </NewCardCalendar>
        </NewCardRow>
        <Categories selected={topic} onSelect={setTopic} />
        <NewCardCreateBtn type="button" onClick={handleSubmit} disabled={loading}>
          {loading ? 'Создание...' : 'Создать задачу'}
        </NewCardCreateBtn>
      </NewCardBlock>
    </NewCardWrapper>
  );
}