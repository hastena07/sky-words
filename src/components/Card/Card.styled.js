import styled from 'styled-components';
import { colors } from '../../theme';

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardBox = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const Group = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Цвет темы берётся из объекта colors.topics по названию темы */
export const ThemeTag = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;

  background-color: ${({ $topic }) =>
    (colors.topics[$topic] || colors.topics.default).bg};
  color: ${({ $topic }) =>
    (colors.topics[$topic] || colors.topics.default).color};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const MenuBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  border: none;
  background-color: ${colors.white};

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${colors.textGray};
  }
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TitleLink = styled.a`
  display: block;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${colors.black};
  margin-bottom: 10px;
`;

export const DateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CalendarIcon = styled.svg`
  width: 13px;
`;

export const DateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: ${colors.textGray};
  letter-spacing: 0.2px;
`;
