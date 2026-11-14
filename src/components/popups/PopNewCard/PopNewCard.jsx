import { useState } from 'react';
import Calendar from '../../Calendar/Calendar.jsx';
import Categories from '../../Categories/Categories.jsx';
import {
  PopWrap, PopContainer, PopBlock, PopContent, PopClose, PopTitle,
  PopWrapInner, FormNew, FormNewBlock, FormNewInput, FormNewArea,
  CalendarBlock, CreateBtn,
} from './PopNewCard.styled.js';

export default function PopNewCard({ onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [topic, setTopic] = useState('Web Design');
  const [date, setDate] = useState(null); // null = «Выберите срок исполнения»

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (!title.trim() || !date) return;
    onCreate({
      title: title.trim(),
      description: description.trim(),
      topic,
      date: `${String(date).padStart(2, '0')}.09.23`,
      status: 'Без статуса',
    });
  };

  return (
    <PopWrap>
      <PopContainer onClick={onClose}>
        <PopBlock onClick={(e) => e.stopPropagation()}>
          <PopContent>
            <PopTitle>Создание задачи</PopTitle>
            <PopClose type="button" onClick={onClose} aria-label="Закрыть">✖</PopClose>
            <PopWrapInner>
              <FormNew onSubmit={handleSubmit}>
                <FormNewBlock>
                  <label htmlFor="formTitle">Название задачи</label>
                  <FormNewInput
                    id="formTitle"
                    type="text"
                    name="name"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </FormNewBlock>
                <FormNewBlock>
                  <label htmlFor="textArea">Описание задачи</label>
                  <FormNewArea
                    id="textArea"
                    name="text"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </FormNewBlock>
              </FormNew>
              <CalendarBlock>
                <Calendar selected={date} onChange={setDate} />
              </CalendarBlock>
            </PopWrapInner>
            <Categories selected={topic} onSelect={setTopic} />
            <CreateBtn type="button" onClick={handleSubmit}>Создать задачу</CreateBtn>
          </PopContent>
        </PopBlock>
      </PopContainer>
    </PopWrap>
  );
}