import { useState } from 'react';
import { ModalWrapper, Block, Ttl, Form, Input, BtnSignUp, FormGroup } from './SignUp.styled';

const SignUp = ({ onSwitchMode, onEnter }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Заполните все поля');
      return;
    }
    onEnter();
  };

  return (
    <ModalWrapper>
      <Block>
        <Ttl>Регистрация</Ttl>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <BtnSignUp type="submit">Зарегистрироваться</BtnSignUp>
          <FormGroup>
            <p>
              Уже есть аккаунт?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onSwitchMode();
                }}
              >
                Войдите здесь
              </a>
            </p>
          </FormGroup>
        </Form>
      </Block>
    </ModalWrapper>
  );
};

export default SignUp;
