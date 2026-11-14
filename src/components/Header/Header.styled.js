import styled from 'styled-components';

export const HeaderBlock = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgCard};
`;

export const HeaderBlockInner = styled.div`
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

export const HeaderLogo = styled.div`
  img { width: 85px; }
`;

export const HeaderNav = styled.nav`
  position: relative;
  max-width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnMainNew = styled.button`
  width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
  transition: background-color 0.2s;
  &:hover { background-color: ${({ theme }) => theme.colors.primaryHover}; }

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

export const HeaderUser = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 1.9px solid ${({ theme }) => theme.colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
  }
  &:hover { color: ${({ theme }) => theme.colors.primaryHover}; }
`;