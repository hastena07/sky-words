import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  SignInWrap, SignInBlock, SignInTitle, SignInForm,
  SignInInput, SignInBtn, SignInGroup,
} from './SignIn.styled.js';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <SignInWrap>
      <SignInBlock>
        <SignInTitle>Вход</SignInTitle>
        <SignInForm onSubmit={handleSubmit}>
          <SignInInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SignInInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SignInBtn type="submit">Войти</SignInBtn>
          <SignInGroup>
            <p>Нужно зарегистрироваться?</p>
            <Link to="/signup">Регистрируйтесь здесь</Link>
          </SignInGroup>
        </SignInForm>
      </SignInBlock>
    </SignInWrap>
  );
}