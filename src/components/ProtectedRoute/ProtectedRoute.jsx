import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

export default function ProtectedRoute() {
  const { isAuth, loading } = useAuth();
  if (loading) return <div>Загрузка...</div>;
  if (!isAuth) return <Navigate to="/login" replace />; 
  return <Outlet />;
}
