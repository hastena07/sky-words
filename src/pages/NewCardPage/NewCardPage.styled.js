import styled from 'styled-components';

export const NewCardWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: ${({ theme }) => theme.colors.bgMain};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 0 60px;
`;

export const NewCardBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPopup};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  position: relative;
  margin: 0 16px;

  @media screen and (max-width: 495px) { padding: 20px 16px 32px; }
`;

export const NewCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const NewCardClose = styled.button`
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

export const NewCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 660px) { display: block; }
`;

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;
`;

export const NewCardBlockField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewCardLabel = styled.label`
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  font-weight: 600;
`;

export const NewCardInput = styled.input`
  padding: 14px;
  margin: 20px 0;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  outline: none;

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
`;

export const NewCardArea = styled.textarea`
  margin-top: 14px;
  height: 200px;
  padding: 14px;
  border-radius: 8px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  outline: none;
  resize: none;

  &::placeholder { color: ${({ theme }) => theme.colors.textMuted}; }
`;

export const NewCardCalendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) { width: 100%; }
`;

export const NewCardCreateBtn = styled.button`
  float: right;
  width: 132px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }

  @media screen and (max-width: 495px) {
    width: 100%;
    height: 40px;
    float: none;
  }
`;