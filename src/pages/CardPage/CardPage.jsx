import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Calendar from '../../components/Calendar/Calendar.jsx';
import { statuses } from '../../data.js';
import { getTask, updateTask, deleteTask } from '../../services/tasks.js';
import {
  CardPageWrapper, CardPageBlock, CardPageContent, CardPageTop,
  CardPageTitle, CardPageTopic, CardId, StatusBlock, StatusThemes,
  StatusItem, CardPageRow, CardPageForm, CardPageLabel, CardPageArea,
  CardPageBtns, BtnGroup, Btn, CardError,
} from './CardPage.styled.js';

const topicKey = { 'Web Design': 'orange', Research: 'green', Copywriting: 'purple' };

export default function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({});

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getTask(id)
      .then((t) => {
        if (cancelled) return;
        setTask(t);
        setDraft({
          title: t.title,
          description: t.description || '',
          status: t.status,
          date: new Date(t.date).getDate(),
        });
      })
      .catch((err) => !cancelled && setError(err.message))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [id]);

  const close = () => navigate('/');

  const handleSave = async () => {
    try {
      await updateTask(id, {
        title: draft.title,
        description: draft.description,
        status: draft.status,
        topic: task.topic,
        date: new Date(2023, 8, draft.date).toISOString(),
      });
      close();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(id);
      close();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <CardPageWrapper onClick={close}>
        <CardPageBlock onClick={(e) => e.stopPropagation()}>
          <CardPageContent>Загрузка...</CardPageContent>
        </CardPageBlock>
      </CardPageWrapper>
    );
  }

  if (error || !task) {
    return (
      <CardPageWrapper onClick={close}>
        <CardPageBlock onClick={(e) => e.stopPropagation()}>
          <CardPageContent>
            <CardError>{error || 'Задача не найдена'}</CardError>
            <Btn type="button" onClick={close}>Закрыть</Btn>
          </CardPageContent>
        </CardPageBlock>
      </CardPageWrapper>
    );
  }

  return (
    <CardPageWrapper onClick={close}>
      <CardPageBlock onClick={(e) => e.stopPropagation()}>
        <CardPageContent>
          <CardId>Задача №{id}</CardId>
          <CardPageTop>
            <CardPageTitle>{draft.title}</CardPageTitle>
            <CardPageTopic $type={topicKey[task.topic]}>{task.topic}</CardPageTopic>
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
              <CardPageLabel htmlFor="cardDescription">Описание задачи</CardPageLabel>
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
                <Btn $border type="button" onClick={handleDelete}>Удалить задачу</Btn>
              </BtnGroup>
              <Btn type="button" onClick={close}>Закрыть</Btn>
            </CardPageBtns>
          ) : (
            <CardPageBtns>
              <BtnGroup>
                <Btn type="button" onClick={handleSave}>Сохранить</Btn>
                <Btn $border type="button" onClick={() => setIsEditing(false)}>Отменить</Btn>
                <Btn $border type="button" onClick={handleDelete}>Удалить задачу</Btn>
              </BtnGroup>
              <Btn type="button" onClick={close}>Закрыть</Btn>
            </CardPageBtns>
          )}
        </CardPageContent>
      </CardPageBlock>
    </CardPageWrapper>
  );
}