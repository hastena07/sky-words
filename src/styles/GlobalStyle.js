import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
    font-family: inherit;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
`;
