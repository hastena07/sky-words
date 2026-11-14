import { useState } from 'react';
import Calendar from '../../Calendar/Calendar.jsx';
import { statuses } from '../../../data.js';
import {
  BrowseWrap, BrowseContainer, BrowseBlock, BrowseContent, BrowseClose,
  BrowseTitle, BrowseTop, TopicBadge, StatusBlock, StatusThemes, StatusItem,
  BrowseWrapInner, FormBrowse, FormBrowseBlock, FormBrowseLabel, BrowseArea,
  CalendarBlock, BtnBrowse, BtnEdit, BtnGroup, Btn,
} from './PopBrowse.styled.js';

const topicKey = {
  'Web Design': 'orange',
  Research: 'green',
  Copywriting: 'purple',
};

const dayFromDate = (dateStr) => Number(dateStr?.split('.')[0]) || null;

export default function PopBrowse({ task, onClose, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({
    title: task.title,
    description: task.description || '',
    status: task.status,
    date: dayFromDate(task.date),
  });

  const handleSave = () => {
    onSave?.({
      ...task,
      title: draft.title,
      description: draft.description,
      status: draft.status,
      date: draft.date
        ? `${String(draft.date).padStart(2, '0')}.09.23`
        : task.date,
    });
    setIsEditing(false);
  };

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
    <BrowseWrap>
      <BrowseContainer onClick={onClose}>
        <BrowseBlock onClick={(e) => e.stopPropagation()}>
          <BrowseContent>
            <BrowseTop>
              <BrowseTitle>{draft.title}</BrowseTitle>
              <TopicBadge $type={topicKey[task.topic]} className="theme-top">
                {task.topic}
              </TopicBadge>
            </BrowseTop>

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

            <BrowseWrapInner>
              <FormBrowse>
                <FormBrowseBlock>
                  <FormBrowseLabel htmlFor="browseDescription">
                    Описание задачи
                  </FormBrowseLabel>
                  <BrowseArea
                    id="browseDescription"
                    name="text"
                    placeholder="Введите описание задачи..."
                    readOnly={!isEditing}
                    value={draft.description}
                    onChange={(e) =>
                      setDraft((p) => ({ ...p, description: e.target.value }))
                    }
                  />
                </FormBrowseBlock>
              </FormBrowse>
              <CalendarBlock>
                <Calendar
                  selected={draft.date}
                  onChange={(d) => setDraft((p) => ({ ...p, date: d }))}
                  readOnly={!isEditing}
                />
              </CalendarBlock>
            </BrowseWrapInner>

            <TopicBadge $type={topicKey[task.topic]} className="theme-down">
              {task.topic}
            </TopicBadge>

            {!isEditing ? (
              <BtnBrowse>
                <BtnGroup>
                  <Btn $border type="button" onClick={() => setIsEditing(true)}>
                    Редактировать задачу
                  </Btn>
                  <Btn $border type="button" onClick={() => onDelete?.(task.id)}>
                    Удалить задачу
                  </Btn>
                </BtnGroup>
                <Btn type="button" onClick={onClose}>Закрыть</Btn>
              </BtnBrowse>
            ) : (
              <BtnEdit>
                <BtnGroup>
                  <Btn type="button" onClick={handleSave}>Сохранить</Btn>
                  <Btn $border type="button" onClick={handleCancel}>Отменить</Btn>
                  <Btn $border type="button" onClick={() => onDelete?.(task.id)}>
                    Удалить задачу
                  </Btn>
                </BtnGroup>
                <Btn type="button" onClick={onClose}>Закрыть</Btn>
              </BtnEdit>
            )}
          </BrowseContent>
        </BrowseBlock>
      </BrowseContainer>
    </BrowseWrap>
  );
}