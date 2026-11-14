import styled from 'styled-components';
import { BtnBg } from '../ui/Buttons.styled';

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.wrapperBg};
`;

export const Block = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.popoverBg};
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.popBorder};
  box-shadow: ${({ theme }) => theme.blockShadow};

  @media screen and (max-width: 375px) {
    padding: 0 16px;
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
`;

export const Ttl = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.text};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 0.7px solid ${({ theme }) => theme.inputBorder};
  outline: none;
  padding: 10px 8px;
  font-family: inherit;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: ${({ theme }) => theme.textGray};
  }
`;

export const BtnSignUp = styled(BtnBg)`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const FormGroup = styled.div`
  text-align: center;

  p,
  a {
    color: ${({ theme }) => theme.textGray};
    opacity: 0.4;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
  }
`;
