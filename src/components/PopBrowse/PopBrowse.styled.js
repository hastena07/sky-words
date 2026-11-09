import styled from 'styled-components';
import { BtnBg, BtnBorder } from '../ui/Buttons.styled';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

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
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.popBorder};
  position: relative;

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

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Ttl = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CloseBtn = styled.button`
  border: none;
  background: none;
  padding: 0;
  color: ${({ theme }) => theme.textGray};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

/* $class — colorClass темы (_orange, _green, _purple) */
export const Category = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-bottom: 20px;

  background-color: ${({ theme, $class }) =>
    (theme.topics[$class] || theme.topics._gray).bg};
  color: ${({ theme, $class }) =>
    (theme.topics[$class] || theme.topics._gray).color};

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Description = styled.div`
  margin-bottom: 20px;

  p {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.text};
    white-space: pre-wrap;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    button {
      width: 100%;
      height: 40px;
      margin-right: 0;
    }
  }
`;
