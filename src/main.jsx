import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { GlobalStyle } from './App.styled.js';
import { lightTheme, darkTheme } from './themes.js';
import './index.css';

function Root() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  const [isAuth, setIsAuth] = useState(
    () => localStorage.getItem('isAuth') === 'true'
  );

  const handleThemeToggle = (next) => {
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const login = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', 'true');
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', 'false');
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App
          isAuth={isAuth}
          login={login}
          logout={logout}
          isDark={isDark}
          onThemeToggle={handleThemeToggle}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);