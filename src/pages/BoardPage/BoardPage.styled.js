import styled from 'styled-components';

export const BoardError = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
`;

export const RetryBtn = styled.button`
  margin-top: 16px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
`;