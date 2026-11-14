import styled from 'styled-components';

/* Полупрозрачный фон поверх страницы, но ПОД окном */
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.overlay};
  z-index: 9998;
`;

/* Полноэкранная обёртка окна — выше фона */
export const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
