import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './App.styled';
import App from './App.jsx';
import './styles/temp-popups.css';


const container = document.getElementById('root');
if (!container) throw new Error('Missing #root element.');

createRoot(container).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
