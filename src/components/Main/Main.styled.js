import styled from 'styled-components';

export const MainBlock = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bgMain};

  @media screen and (max-width: 1200px) { padding: 40px 0 64px; }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    display: block;
    padding: 0;
  }
`;

export const Loading = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;