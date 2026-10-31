// src/main.js
import  { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // Глобальные стили
import App from './App.jsx';

// Находим контейнер для приложения 
const Container = document.getElementById('root');
 if (!Container) throw new Error('Missing #root element.'); // Создаем корневой компонент React 
  const root = createRoot(Container); // <-- Передаем найденный DOM-элемент! // Рендерим приложение 
  
  root.render( <StrictMode>
     <App /> 
  </StrictMode> );