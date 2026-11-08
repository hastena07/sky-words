import styled from 'styled-components';
import { colors } from '../../theme';

export const BtnBg = styled.button`
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  font-family: inherit;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`;

export const BtnBorder = styled.button`
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  background-color: transparent;
  color: ${colors.primary};
  border: 0.7px solid ${colors.primary};
  font-family: inherit;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;

  &:hover {
    color: ${colors.primaryHover};
    border-color: ${colors.primaryHover};
  }
`;
