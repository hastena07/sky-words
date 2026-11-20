import styled from 'styled-components';

export const NotFoundWrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bgMain};
  gap: 16px;
`;

export const NotFoundCode = styled.h1`
  font-size: 96px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NotFoundText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const NotFoundLink = styled.a`
  padding: 10px 20px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;

  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
`;