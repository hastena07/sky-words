import styled from 'styled-components';

export const BtnBg = styled.button`
  border-radius: 4px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`;

export const BtnBorder = styled.button`
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => theme.popAccent};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.popAccent};
  font-family: inherit;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.btnBorderHoverBg};
    border-color: ${({ theme }) => theme.btnBorderHoverBg};
    color: ${({ theme }) => theme.white};
  }
`;
