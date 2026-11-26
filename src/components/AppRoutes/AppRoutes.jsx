import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import BoardPage from '../../pages/BoardPage/BoardPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import CardPage from '../../pages/CardPage/CardPage.jsx';
import NewCardPage from '../../pages/NewCardPage/NewCardPage.jsx';
import ExitPage from '../../pages/ExitPage/ExitPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';

export default function AppRoutes({ isDark, onThemeToggle }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<BoardPage isDark={isDark} onThemeToggle={onThemeToggle} />}
        >
          <Route path="card/:id" element={<CardPage />} />
          <Route path="new" element={<NewCardPage />} />
          <Route path="exit" element={<ExitPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}