import styled from 'styled-components';
import { colors } from '../../theme';

export const ColumnBlock = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.p`
  color: ${colors.textGray};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  padding: 0 10px;
  margin: 15px 0;
`;

export const CardsWrap = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-y: auto;
  }
`;

export const Empty = styled.div`
  padding: 0 10px;
  color: ${colors.textGray};
`;
