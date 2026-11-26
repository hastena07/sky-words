import AppRoutes from './components/AppRoutes/AppRoutes.jsx';

export default function App({ isAuth, login, logout, isDark, onThemeToggle }) {
  return (
    <AppRoutes
      isAuth={isAuth}
      login={login}
      logout={logout}
      isDark={isDark}
      onThemeToggle={onThemeToggle}
    />
  );
}