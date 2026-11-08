import styled, { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    color: ${colors.black};
  }
  a, a:visited { text-decoration: none; cursor: pointer; }
  button, ._btn { cursor: pointer; outline: none; }
  ul li { list-style: none; }
  div, button, a { font-family: inherit; }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${colors.bgPage};
`;

export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.bgPage};
`;

export const LoadingMessage = styled.div`
  font-size: 1.2rem;
  color: ${colors.textMuted};
`;

/* Общий контейнер: используется Header и Main */
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;
