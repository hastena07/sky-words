import styled from 'styled-components';

export const CardPageWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.overlay};

  @media screen and (max-width: 660px) {
    top: 70px;
    padding: 0;
    align-items: flex-start;
  }
`;

export const CardPageBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPopup};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  position: relative;

  @media screen and (max-width: 660px) { border-radius: 0; }
  @media screen and (max-width: 495px) { padding: 20px 16px 32px; }
`;

export const CardPageContent = styled.div`
  display: block;
  text-align: left;
`;

export const CardId = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  margin-bottom: 8px;
`;

export const CardPageTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const CardPageTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const CardPageTopic = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  background-color: ${({ $type, theme }) => theme.colors[$type]?.bg || '#ccc'};
  color: ${({ $type, theme }) => theme.colors[$type]?.text || '#000'};
`;

export const StatusBlock = styled.div`
  margin-bottom: 18px;

  p {
    color: ${({ theme }) => theme.colors.textMain};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
  }
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`;

export const StatusItem = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  padding: 11px 14px 10px;
  font-size: 14px;
  line-height: 1;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  background: ${({ $active, theme }) => ($active ? theme.colors.gray.bg : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.textMuted)};
`;

export const CardPageRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media screen and (max-width: 660px) { display: block; }
`;

export const CardPageForm = styled.form`
  max-width: 370px;
  width: 100%;
`;

export const CardPageLabel = styled.label`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  font-weight: 600;
`;

export const CardPageArea = styled.textarea`
  width: 100%;
  max-width: 370px;
  margin-top: 14px;
  padding: 14px;
  height: 200px;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.bgInput};
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  outline: none;
  resize: none;

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
  &:read-only { cursor: default; }
`;

export const CardPageBtns = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Btn = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  background: ${({ $border, theme }) => ($border ? 'transparent' : theme.colors.primary)};
  color: ${({ $border, theme }) => ($border ? theme.colors.primary : theme.colors.white)};
  border: ${({ $border, theme }) => ($border ? `0.7px solid ${theme.colors.primary}` : 'none')};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    color: #fff;
  }
`;

export const CardError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin: 10px 0;
`;