// src/components/Auth/SignIn.jsx
import { useState } from 'react';
import { ModalWrapper, Block, Ttl, Form, Input, BtnEnter, FormGroup } from './SignIn.styled';

const SignIn = ({ onSwitchMode, onEnter }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert('Заполните все поля');
      return;
    }
    onEnter();
  };

  return (
    <ModalWrapper>
      <Block>
        <Ttl>Вход</Ttl>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Эл. почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <BtnEnter type="submit">Войти</BtnEnter>
          <FormGroup>
            <p>
              Нужно зарегистрироваться?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchMode();
                }}
              >
                Регистрируйтесь здесь
              </a>
            </p>
          </FormGroup>
        </Form>
      </Block>
    </ModalWrapper>
  );
};

export default SignIn;
