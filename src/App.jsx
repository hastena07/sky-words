import { useEffect, useState } from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import PopNewCard from './components/popups/PopNewCard/PopNewCard.jsx';
import PopBrowse from './components/popups/PopBrowse/PopBrowse.jsx';
import PopExit from './components/popups/PopExit/PopExit.jsx';
import { tasks as initialTasks } from './data.js';
import { Wrapper } from './App.styled.js';

export default function App({ isDark, onThemeToggle }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [popNewOpen, setPopNewOpen] = useState(false);
  const [popBrowseOpen, setPopBrowseOpen] = useState(false);
  const [popExitOpen, setPopExitOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(initialTasks);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (task) => {
    setSelectedTask(task);
    setPopBrowseOpen(true);
  };

  const handleCreate = (task) => {
    setData((prev) => [...prev, { ...task, id: Date.now() }]);
    setPopNewOpen(false);
  };

  const handleSave = (updated) => {
    setData((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    setSelectedTask(updated);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((t) => t.id !== id));
    setPopBrowseOpen(false);
    setSelectedTask(null);
  };

  return (
    <Wrapper>
      <Header
        onNewCard={() => setPopNewOpen(true)}
        onExit={() => setPopExitOpen(true)}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
      />
      <Main tasks={data} isLoading={isLoading} onCardClick={handleCardClick} />
      {popNewOpen && (
        <PopNewCard onClose={() => setPopNewOpen(false)} onCreate={handleCreate} />
      )}
      {popBrowseOpen && selectedTask && (
        <PopBrowse
          task={selectedTask}
          onClose={() => { setPopBrowseOpen(false); setSelectedTask(null); }}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
      {popExitOpen && <PopExit onClose={() => setPopExitOpen(false)} />}
    </Wrapper>
  );
}