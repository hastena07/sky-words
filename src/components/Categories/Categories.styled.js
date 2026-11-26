import styled from 'styled-components';

export const CategoriesBlock = styled.div`
  margin-bottom: 20px;

  ${({ $variant }) =>
    $variant === 'top' &&
    `display: block; @media screen and (max-width: 495px) { display: none; }`}
  ${({ $variant }) =>
    $variant === 'down' &&
    `display: none; margin-bottom: 20px; @media screen and (max-width: 495px) { display: inline-block; }`}
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoryItem = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  cursor: ${({ $readOnly }) => ($readOnly ? 'default' : 'pointer')};
  opacity: ${({ $active, $readOnly }) => ($readOnly || $active ? 1 : 0.4)};
  transition: opacity 0.2s;
  background-color: ${({ $type, theme }) => theme.colors[$type]?.bg || '#ccc'};
  color: ${({ $type, theme }) => theme.colors[$type]?.text || '#000'};
`;