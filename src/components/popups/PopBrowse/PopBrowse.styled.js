import styled from 'styled-components';

export const BrowseWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 7;
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

export const BrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const BrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgPopup};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  position: relative;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const BrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const BrowseClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  cursor: pointer;

  &:hover { color: ${({ theme }) => theme.colors.textMain}; }
`;

export const BrowseTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const BrowseTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const TopicBadge = styled.div`
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
  opacity: 1;

  &.theme-top {
    display: block;
    @media screen and (max-width: 495px) { display: none; }
  }

  &.theme-down {
    display: none;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) { display: inline-block; }
  }
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
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusItem = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  color: ${({ $active, theme }) => ($active ? theme.colors.white : theme.colors.textMuted)};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  background: ${({ $active, theme }) => ($active ? theme.colors.gray.bg : 'transparent')};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const BrowseWrapInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const FormBrowse = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseLabel = styled.label`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const BrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.colors.bgInput};
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({ theme }) => theme.colors.textMain};
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.colors.textMuted};
    letter-spacing: -0.14px;
  }

  &:read-only { cursor: default; }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const CalendarBlock = styled.div`
  width: 182px;
 

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;

export const BtnBrowse = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  @media screen and (max-width: 495px) {
    flex-direction: column;
    gap: 10px;

    button { width: 100%; height: 40px; margin-bottom: 0; }
  }
`;

export const BtnEdit = BtnBrowse;


export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media screen and (max-width: 495px) {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
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
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;