import styled from 'styled-components';
import { BtnBg, BtnBorder } from '../ui/Buttons.styled';

export const Block = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.popoverBg};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.popBorder};
  box-shadow: ${({ theme }) => theme.blockShadow};

  @media only screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

export const Ttl = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.text};
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    display: block;
  }
`;

export const BtnBgExit = styled(BtnBg)`
  width: 153px;
  height: 30px;
  margin-right: 10px;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const BtnBorderExit = styled(BtnBorder)`
  width: 153px;
  height: 30px;

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;
