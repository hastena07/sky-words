import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  RegisterWrap, RegisterBlock, RegisterTitle, RegisterForm,
  RegisterInput, RegisterBtn, RegisterGroup,
} from './RegisterPage.styled.js';

export default function RegisterPage({ login }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <RegisterWrap>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
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
          <RegisterBtn type="submit">Зарегистрироваться</RegisterBtn>
          <RegisterGroup>
            <p>
              Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
            </p>
          </RegisterGroup>
        </RegisterForm>
      </RegisterBlock>
    </RegisterWrap>
  );
}