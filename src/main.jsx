import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { GlobalStyle } from './App.styled.js';
import { lightTheme, darkTheme } from './themes.js';
import './index.css';

function Root() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  const handleThemeToggle = (next) => {
    setIsDark(next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <App isDark={isDark} onThemeToggle={handleThemeToggle} />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);