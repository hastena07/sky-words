// src/components/PopUser/PopUser.styled.js
import styled from 'styled-components';
import { colors } from '../../theme';

export const Wrapper = styled.div`
  /* без position: relative — попап позиционируется от HeaderBlock, как в исходной вёрстке */
`;

export const HeaderUser = styled.button`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.primary};
  background: none;
  border: none;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${colors.primary};
    border-bottom: 1.9px solid ${colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: ${colors.primaryHover};

    &::after {
      border-left-color: ${colors.primaryHover};
      border-bottom-color: ${colors.primaryHover};
    }
  }
`;

export const PopUserSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  min-height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${colors.border};
  background: ${colors.white};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  display: block;
`;

export const SetName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.black};
  margin: 0 0 4px;
`;

export const SetMail = styled.p`
  font-size: 14px;
  color: ${colors.textGray};
  margin: 0 0 16px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${colors.black};
  }

  input {
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border: none;
  margin: 0;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  flex-shrink: 0;

 
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94A6BE;
    transition: 0.5s;
  }

 
  &:checked::before {
    left: 12px;
  }
`;


export const BtnExit = styled.button`
  width: 72px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid ${colors.primary};
  background: transparent;
  color: ${colors.primary};
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${colors.primaryHover};
    border-color: ${colors.primaryHover};
  }
`;
