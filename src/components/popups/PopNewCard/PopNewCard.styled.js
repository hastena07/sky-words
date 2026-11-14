import styled from 'styled-components';

export const PopWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 6;
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

export const PopContainer = styled.div`
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

export const PopBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgPopup};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  position: relative;

  @media screen and (max-width: 660px) { border-radius: 0; }
  @media screen and (max-width: 495px) { padding: 20px 16px 32px; }
`;

export const PopContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.colors.textMuted};
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover { color: ${({ theme }) => theme.colors.textMain}; }
`;

export const PopWrapInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) { display: block; }
`;

export const FormNew = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) { max-width: 100%; }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.textMain};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.textMain};

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
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
  }

  @media screen and (max-width: 495px) { max-width: 100%; height: 34px; }
`;

export const CalendarBlock = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) { max-width: 340px; width: 100%; }
  @media screen and (max-width: 495px) { width: 100%; }
`;

export const CreateBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.colors.white};
  float: right;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover { background-color: ${({ theme }) => theme.colors.primaryHover}; }

  @media screen and (max-width: 495px) { width: 100%; height: 40px; float: none; }
`;