import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginWrap, LoginBlock, LoginTitle, LoginForm,
  LoginInput, LoginBtn, LoginGroup,
} from './LoginPage.styled.js';

export default function LoginPage({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <LoginWrap>
      <LoginBlock>
        <LoginTitle>Вход</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginBtn type="submit">Войти</LoginBtn>
          <LoginGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/register">Регистрируйтесь здесь</Link>
          </LoginGroup>
        </LoginForm>
      </LoginBlock>
    </LoginWrap>
  );
}