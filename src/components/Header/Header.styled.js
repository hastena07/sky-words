// src/components/Header/Header.styled.js
import styled from 'styled-components';
import { BtnBg } from '../ui/Buttons.styled';

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.headerBg};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Logos = styled.div``;

/* Показ одного логотипа в зависимости от темы */
export const LogoLight = styled.a`
  display: ${({ theme }) => theme.logoLightDisplay};

  img {
    width: 85px;
  }
`;

export const LogoDark = styled.a`
  display: ${({ theme }) => theme.logoDarkDisplay};

  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMainNew = styled(BtnBg)`
  width: 178px;
  height: 30px;
  margin-right: 20px;

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    margin-right: 0;
  }
`;
