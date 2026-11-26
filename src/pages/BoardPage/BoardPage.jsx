import { useEffect, useState, useCallback } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import { getTasks } from '../../services/tasks.js';
import { Wrapper } from '../../App.styled.js';
import { BoardError, RetryBtn } from './BoardPage.styled.js';

export default function BoardPage({ isDark, onThemeToggle }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loadTasks = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const tasks = await getTasks();
      setData(tasks);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { loadTasks(); }, [loadTasks]);

  return (
    <Wrapper>
      <Header
        onNewCard={() => navigate('/new')}
        onExit={() => navigate('/exit')}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
      />
      {error ? (
        <BoardError>
          <p>{error}</p>
          <RetryBtn type="button" onClick={loadTasks}>Повторить</RetryBtn>
        </BoardError>
      ) : (
        <Main
          tasks={data}
          isLoading={isLoading}
          onCardClick={(task) => navigate(`/card/${task._id}`)}
        />
      )}
      <Outlet />
    </Wrapper>
  );
}