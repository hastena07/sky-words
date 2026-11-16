import styled from 'styled-components';

export const CardWrap = styled.div`
  padding: 5px;
  animation: card-animation 500ms linear;
`;

export const CardBox = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $topic, theme }) => theme.colors[$topic]?.bg || '#ccc'};
`;

export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $topic, theme }) => theme.colors[$topic]?.text || '#000'};
`;

export const CardBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 2px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardLink = styled.a`
  display: block;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg { width: 13px; }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    letter-spacing: 0.2px;
  }
`;