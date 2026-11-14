import styled from 'styled-components';

// .cards__item — обёртка с padding и анимацией, БЕЗ фона
export const CardWrap = styled.div`
  padding: 5px;
  animation: card-animation 500ms linear;
`;

// .cards__card — белая карточка 220×130
export const CardBox = styled.div`
  width: 220px;
  height: 130px;
<<<<<<< HEAD
  background-color: ${({ theme }) => theme.colors.bgCard};
=======
  background-color: ${({ theme }) => theme.cardBg};
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  cursor: pointer;
`;

<<<<<<< HEAD
// .card__group
=======
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

<<<<<<< HEAD
// .card__theme — фон от категории
=======
/* $class — colorClass темы (_orange, _green, _purple) */
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
<<<<<<< HEAD
  background-color: ${({ $topic, theme }) => theme.colors[$topic]?.bg || '#ccc'};
`;

// .card__theme p — цвет текста от категории
export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: ${({ $topic, theme }) => theme.colors[$topic]?.text || '#000'};
`;

// .card__btn
export const CardBtn = styled.button`
=======
  background-color: ${({ theme, $class }) =>
    (theme.topics[$class] || theme.topics._gray).bg};
  color: ${({ theme, $class }) =>
    (theme.topics[$class] || theme.topics._gray).color};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardBtn = styled.div`
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  width: 24px;
  height: 24px;
  padding: 2px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
<<<<<<< HEAD
=======
  padding: 2px;
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6

  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
<<<<<<< HEAD
    background-color: ${({ theme }) => theme.colors.textMuted};
  }
`;

// .card__content
=======
    background-color: ${({ theme }) => theme.textGray};
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

<<<<<<< HEAD
// <a> вокруг заголовка
export const CardLink = styled.a`
  display: block;
`;

// .card__title
export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: 10px;
`;

// .card__date
=======
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
<<<<<<< HEAD

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ theme }) => theme.colors.textMuted};
    letter-spacing: 0.2px;
  }
`;
=======

  svg {
    width: 13px;
    height: 13px;
  }
`;

export const CardDateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: ${({ theme }) => theme.textGray};
  letter-spacing: 0.2px;
`;
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
