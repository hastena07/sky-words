import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  RegisterWrap, RegisterBlock, RegisterTitle, RegisterForm,
  RegisterInput, RegisterBtn, RegisterGroup, RegisterError,
} from './RegisterPage.styled.js';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterWrap>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          {error && <RegisterError>{error}</RegisterError>}
          <RegisterInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <RegisterInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <RegisterInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RegisterBtn type="submit" disabled={loading}>
            {loading ? 'Регистрация...' : 'Зарегистрироваться'}
          </RegisterBtn>
          <RegisterGroup>
            <p>Уже есть аккаунт? <Link to="/login">Войдите здесь</Link></p>
          </RegisterGroup>
        </RegisterForm>
      </RegisterBlock>
    </RegisterWrap>
  );
}