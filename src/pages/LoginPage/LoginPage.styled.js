import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.bgMain};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginBlock = styled.div`
  width: 100%;
  max-width: 368px;
  background: ${({ theme }) => theme.colors.bgPopup};
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 375px) {
    padding: 0 16px;
    border: none;
    box-shadow: none;
  }
`;

export const LoginTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const LoginInput = styled.input`
  padding: 10px 8px;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  background: transparent;
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMain};

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
`;

export const LoginBtn = styled.button`
  height: 30px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;

  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }

  @media screen and (max-width: 375px) { height: 40px; }
`;

export const LoginGroup = styled.div`
  text-align: center;
  margin-top: 20px;

  p, a {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 14px;
  }
  a { text-decoration: underline; }
`;