import styled from 'styled-components';

export const Wrapper = styled.div`
  /* Попап позиционируется от HeaderBlock (position: relative) */
`;

export const HeaderUser = styled.button`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.headerUserColor};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.headerUserColor};
    border-bottom: 1.9px solid ${({ theme }) => theme.headerUserColor};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
  }

  &:hover {
    color: ${({ theme }) => theme.popAccentHover};

    &::after {
      border-left-color: ${({ theme }) => theme.popAccentHover};
      border-bottom-color: ${({ theme }) => theme.popAccentHover};
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
  border: 0.7px solid ${({ theme }) => theme.popoverBorder};
  background: ${({ theme }) => theme.popoverUserBg};
  box-shadow: ${({ theme }) => theme.popoverShadow};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const SetName = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const SetMail = styled.p`
  color: ${({ theme }) => theme.textGray};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

/* Тумблер тёмной темы */
export const Checkbox = styled.input`
  position: relative;
  width: 24px;
  height: 13px;
  border: none;
  margin: 0;
  border-radius: 100px;
  background: ${({ theme }) => theme.toggleTrack};
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.toggleKnob};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const BtnExit = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.popAccent};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.popAccent};
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.popAccentHover};
    border-color: ${({ theme }) => theme.popAccentHover};
  }
`;
