import styled from 'styled-components';
import { colors } from '../../theme';

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.white};
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

export const HeaderNav = styled.div`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoLight = styled.div`
  display: flex;
  align-items: center;

  .Theme-dark & { display: none; }

  img {
    width: 85px;
    height: 32px;
    margin-right: 8px;
    object-fit: contain;
  }
`;

export const LogoDark = styled.div`
  display: none;
  align-items: center;

  .Theme-dark & { display: flex; }

  img {
    width: 85px;
    height: 32px;
    margin-right: 8px;
    object-fit: contain;
  }
`;

export const BtnMainNew = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: ${colors.primaryHover};
  }

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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: 340px;
  border-radius: 10px;
  background: ${colors.white};
  padding: 40px 30px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    color: ${colors.textGray};
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;

  button {
    flex: 1;
    height: 40px;
  }
`;
