import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Main from '../../components/Main/Main.jsx';
import { tasks as initialTasks } from '../../data.js';
import { Wrapper } from '../../App.styled.js';

export default function BoardPage({ isDark, onThemeToggle, logout }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(initialTasks);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <Header
        onNewCard={() => navigate('/new')}
        onExit={() => navigate('/exit')}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
      />
      <Main
        tasks={data}
        isLoading={isLoading}
        onCardClick={(task) => navigate(`/card/${task.id}`)}
      />
    </Wrapper>
  );
}