import styled from 'styled-components';
import { BtnBg } from '../ui/Buttons.styled';

export const Root = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const Block = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.popoverBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.popBorder};
  position: relative;
  box-shadow: ${({ theme }) => theme.blockShadow};

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const Content = styled.div`
  text-align: left;
`;

export const Ttl = styled.h2`
  margin: 0 0 20px;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  border: none;
  background: none;
  padding: 0;
  color: ${({ theme }) => theme.textGray};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

/* Две колонки: слева форма, справа календарь */
export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

/* Левая колонка — форма */
export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const Subttl = styled.p`
  margin: 0 0 10px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  margin:  20px 0;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  font-family: inherit;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.textGray};
    letter-spacing: -0.14px;
  }
`;

export const Area = styled.textarea`
  max-width: 370px;
  width: 100%;
  height: 200px;
  outline: none;
  padding: 14px;
  margin-top: 14px;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.inputBorder};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  font-family: inherit;
  resize: none;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.textGray};
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 34px;
  }
`;

/* Правая колонка — узкий столбец под календарь */
export const CalendarWrap = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BtnCreate = styled(BtnBg)`
  width: 132px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right: 30px;
  bottom: 48px;

  /* На мобильной ширине — во всю ширину блока с его паддингами 16px/32px */
  @media screen and (max-width: 495px) {
    right: 16px;
    bottom: 32px;
    width: calc(100% - 32px);
    height: 40px;
  }
`;
