import styled from 'styled-components';

export const PopUserBox = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.bgPopup};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserName = styled.p`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  margin-bottom: 10px;
  word-break: break-all;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  label {
    color: ${({ theme }) => theme.colors.textMain};
    font-size: 14px;
    cursor: pointer;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.bgInput};
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textMuted};
    transition: 0.5s;
  }

  &:checked::before { left: 12px; }
`;

export const ExitBtn = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.white};
  }
`;