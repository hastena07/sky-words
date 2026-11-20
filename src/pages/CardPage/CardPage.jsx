import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar.jsx';
import Header from '../../components/Header/Header.jsx';
import { tasks, statuses } from '../../data.js';
import { Wrapper } from '../../App.styled.js';
import {
  CardPageWrapper, CardPageTitle, CardPageBlock, CardPageContent,
  CardPageTop, CardPageTopic, StatusBlock, StatusThemes, StatusItem,
  CardPageRow, CardPageForm, CardPageLabel, CardPageArea,
  CardPageBtns, BtnGroup, Btn, CardId,
} from './CardPage.styled.js';

const topicKey = { 'Web Design': 'orange', Research: 'green', Copywriting: 'purple' };
const dayFromDate = (d) => Number(d?.split('.')[0]) || null;

export default function CardPage({ isDark, onThemeToggle, logout }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => String(t.id) === String(id));

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({
    title: task?.title || '',
    description: task?.description || '',
    status: task?.status || 'Без статуса',
    date: dayFromDate(task?.date),
  });

  if (!task) {
    return (
      <Wrapper>
        <Header
          onNewCard={() => navigate('/new')}
          onExit={() => navigate('/exit')}
          isDark={isDark}
          onThemeToggle={onThemeToggle}
          logout={logout}
        />
        <CardPageWrapper>
          <CardPageTitle>Задача не найдена</CardPageTitle>
          <Btn type="button" onClick={() => navigate('/')}>На главную</Btn>
        </CardPageWrapper>
      </Wrapper>
    );
  }

  const handleSave = () => setIsEditing(false);
  const handleCancel = () => {
    setDraft({
      title: task.title,
      description: task.description || '',
      status: task.status,
      date: dayFromDate(task.date),
    });
    setIsEditing(false);
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
      <CardPageWrapper>
        <CardPageBlock>
          <CardPageContent>
            <CardId>Задача №{id}</CardId>
            <CardPageTop>
              <CardPageTitle>{draft.title}</CardPageTitle>
              <CardPageTopic $type={topicKey[task.topic]}>
                {task.topic}
              </CardPageTopic>
            </CardPageTop>

            <StatusBlock>
              <p>Статус</p>
              <StatusThemes>
                {isEditing ? (
                  statuses.map((s) => (
                    <StatusItem
                      key={s}
                      $active={draft.status === s}
                      onClick={() => setDraft((p) => ({ ...p, status: s }))}
                    >
                      {s}
                    </StatusItem>
                  ))
                ) : (
                  <StatusItem $active>{draft.status}</StatusItem>
                )}
              </StatusThemes>
            </StatusBlock>

            <CardPageRow>
              <CardPageForm>
                <CardPageLabel htmlFor="cardDescription">
                  Описание задачи
                </CardPageLabel>
                <CardPageArea
                  id="cardDescription"
                  placeholder="Введите описание задачи..."
                  readOnly={!isEditing}
                  value={draft.description}
                  onChange={(e) =>
                    setDraft((p) => ({ ...p, description: e.target.value }))
                  }
                />
              </CardPageForm>
              <div>
                <Calendar
                  selected={draft.date}
                  onChange={(d) => setDraft((p) => ({ ...p, date: d }))}
                  readOnly={!isEditing}
                />
              </div>
            </CardPageRow>

            {!isEditing ? (
              <CardPageBtns>
                <BtnGroup>
                  <Btn $border type="button" onClick={() => setIsEditing(true)}>
                    Редактировать задачу
                  </Btn>
                  <Btn $border type="button" onClick={() => navigate('/')}>
                    Удалить задачу
                  </Btn>
                </BtnGroup>
                <Btn type="button" onClick={() => navigate('/')}>Закрыть</Btn>
              </CardPageBtns>
            ) : (
              <CardPageBtns>
                <BtnGroup>
                  <Btn type="button" onClick={handleSave}>Сохранить</Btn>
                  <Btn $border type="button" onClick={handleCancel}>Отменить</Btn>
                  <Btn $border type="button" onClick={() => navigate('/')}>
                    Удалить задачу
                  </Btn>
                </BtnGroup>
                <Btn type="button" onClick={() => navigate('/')}>Закрыть</Btn>
              </CardPageBtns>
            )}
          </CardPageContent>
        </CardPageBlock>
      </CardPageWrapper>
    </Wrapper>
  );
}