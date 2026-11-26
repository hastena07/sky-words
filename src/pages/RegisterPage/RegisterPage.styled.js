import styled from 'styled-components';
import {
  LoginWrap, LoginBlock, LoginTitle, LoginForm,
  LoginInput, LoginBtn, LoginGroup,
} from '../LoginPage/LoginPage.styled.js';

export const RegisterWrap = styled(LoginWrap)``;
export const RegisterBlock = styled(LoginBlock)``;
export const RegisterTitle = styled(LoginTitle)``;
export const RegisterForm = styled(LoginForm)``;
export const RegisterInput = styled(LoginInput)``;
export const RegisterBtn = styled(LoginBtn)``;
export const RegisterGroup = styled(LoginGroup)``;

export const RegisterError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-bottom: 8px;
  text-align: center;
`;