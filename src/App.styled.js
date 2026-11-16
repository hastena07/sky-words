import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }
  button,
  ._btn {
    cursor: pointer;
    outline: none;
    font-family: inherit;
  }
  ul li {
    list-style: none;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.textMain};
    background-color: ${({ theme }) => theme.colors.bgWrapper};
  }
  @keyframes card-animation {
    0% { height: 0; opacity: 0; }
    100% { height: auto; opacity: 1; }
  }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgWrapper};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;