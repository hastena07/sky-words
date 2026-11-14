import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  SignUpWrap, SignUpBlock, SignUpTitle, SignUpForm,
  SignUpInput, SignUpBtn, SignUpGroup,
} from './SignUp.styled.js';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <SignUpWrap>
      <SignUpBlock>
        <SignUpTitle>Регистрация</SignUpTitle>
        <SignUpForm onSubmit={handleSubmit}>
          <SignUpInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <SignUpInput
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SignUpInput
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <SignUpBtn type="submit">Зарегистрироваться</SignUpBtn>
          <SignUpGroup>
            <p>
              Уже есть аккаунт? <Link to="/signin">Войдите здесь</Link>
            </p>
          </SignUpGroup>
        </SignUpForm>
      </SignUpBlock>
    </SignUpWrap>
  );
}