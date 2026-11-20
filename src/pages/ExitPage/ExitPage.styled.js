import styled from 'styled-components';

export const ExitPageWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ExitPageBlock = styled.div`
  background: ${({ theme }) => theme.colors.bgPopup};
  width: 100%;
  max-width: 370px;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};

  @media screen and (max-width: 375px) { padding: 50px 20px; }
`;

export const ExitPageTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.textMain};
`;

export const ExitPageGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media screen and (max-width: 375px) { display: block; }
`;

export const ExitPageYes = styled.button`
  flex: 1;
  height: 30px;
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  cursor: pointer;

  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
  }
`;

export const ExitPageNo = styled.button`
  flex: 1;
  height: 30px;
  border-radius: 4px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 0.7px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    color: #fff;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
  }
`;