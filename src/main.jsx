// src/main.js
import  { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // Глобальные стили
import App from './App.jsx';

// Находим контейнер для приложения 
const container = document.getElementById('root');
 if (!container) throw new Error('Missing #root element.'); // Создаем корневой компонент React 
  const root = createRoot(container); // <-- Передаем найденный DOM-элемент! // Рендерим приложение 
  
  root.render( <StrictMode>
     <App /> 
  </StrictMode> );