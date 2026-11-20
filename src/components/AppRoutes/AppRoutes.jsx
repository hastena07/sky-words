import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';
import BoardPage from '../../pages/BoardPage/BoardPage.jsx';
import LoginPage from '../../pages/LoginPage/LoginPage.jsx';
import RegisterPage from '../../pages/RegisterPage/RegisterPage.jsx';
import CardPage from '../../pages/CardPage/CardPage.jsx';
import NewCardPage from '../../pages/NewCardPage/NewCardPage.jsx';
import ExitPage from '../../pages/ExitPage/ExitPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';

export default function AppRoutes({
  isAuth, login, logout, isDark, onThemeToggle,
}) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage login={login} />} />
      <Route path="/register" element={<RegisterPage login={login} />} />

      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={
            <BoardPage
              isDark={isDark}
              onThemeToggle={onThemeToggle}
              logout={logout}
            />
          }
        />
        <Route
          path="/card/:id"
          element={
            <CardPage
              isDark={isDark}
              onThemeToggle={onThemeToggle}
              logout={logout}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewCardPage
              isDark={isDark}
              onThemeToggle={onThemeToggle}
              logout={logout}
            />
          }
        />
        <Route
          path="/exit"
          element={<ExitPage logout={logout} />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}