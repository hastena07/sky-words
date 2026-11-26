import { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/auth.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = authService.getToken();
    if (token) setIsAuth(true);
    setLoading(false);
  }, []);

  const login = async (loginValue, password) => {
    const userData = await authService.login(loginValue, password);
    setIsAuth(true);
    setUser(userData);
    return userData;
  };

  const register = async (loginValue, name, password) => {
    const userData = await authService.register(loginValue, name, password);
    setIsAuth(true);
    setUser(userData);
    return userData;
  };

  const logout = () => {
    authService.logout();
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}