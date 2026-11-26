import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  LoginWrap, LoginBlock, LoginTitle, LoginForm,
  LoginInput, LoginBtn, LoginGroup, LoginError,
} from './LoginPage.styled.js';

export default function LoginPage() {
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(loginValue, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrap>
      <LoginBlock>
        <LoginTitle>Вход</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          {error && <LoginError>{error}</LoginError>}
          <LoginInput
            type="text"
            placeholder="Логин"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            required
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginBtn type="submit" disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </LoginBtn>
          <LoginGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </LoginGroup>
        </LoginForm>
      </LoginBlock>
    </LoginWrap>
  );
}