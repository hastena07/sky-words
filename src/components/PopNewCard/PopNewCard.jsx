import { useState } from 'react';
import {
  Root, Container, Block, Content, Ttl, CloseBtn,
  Wrap, Form, Subttl, Input, Area, CalendarWrap, Actions, BtnCreate,
} from './PopNewCard.styled';
import Categories from '../Categories/Categories';
import Calendar from '../Calendar/Calendar';

const PopNewCard = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('_orange');
  const [date, setDate] = useState('');

  const now = new Date();
  const monthName = now.toLocaleString('ru-RU', { month: 'long' });
  const year = now.getFullYear();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }
    onCreate({ title, description, category, date });
    onClose();
  };

  const categoriesList = [
    { name: 'Web Design', colorClass: '_orange' },
    { name: 'Research', colorClass: '_green' },
    { name: 'Copywriting', colorClass: '_purple' },
  ];

  return (
    <Root>
      <Container>
        <Block>
          <CloseBtn type="button" aria-label="Закрыть окно" onClick={onClose}>
            &#10006;
          </CloseBtn>

          <Content>
            <Ttl>Создание задачи</Ttl>

            {/* Две колонки: форма слева, календарь справа */}
            <Wrap>
              <Form onSubmit={handleCreate} id="formNewCard">
                <label htmlFor="formTitle">
                  <Subttl as="span">Название задачи</Subttl>
                </label>
                <Input
                  id="formTitle"
                  type="text"
                  placeholder="Введите название задачи..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
                <label htmlFor="formTitle">
                  <Subttl as="span">Описание задачи</Subttl>
                </label>
                <Area
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                
                <Categories
                  activeCategory={category}
                  categories={categoriesList}
                  onSelect={(selected) => setCategory(selected)}
                />

                
                <Actions>
                  <BtnCreate type="submit">Создать задачу</BtnCreate>
                </Actions>
              </Form>

              {/* Календарь — отдельная колонка, не внутри формы */}
              <CalendarWrap>
                <label htmlFor="formTitle">
                  <Subttl as="span">Даты</Subttl>
                </label>
                <Calendar month={monthName} year={year} />
              </CalendarWrap>
            </Wrap>
          </Content>
        </Block>
      </Container>
    </Root>
  );
};

export default PopNewCard;
