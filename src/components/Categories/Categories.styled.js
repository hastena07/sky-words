import styled from 'styled-components';

export const CategoriesBlock = styled.div`
  margin-bottom: 20px;
<<<<<<< HEAD

  /* В PopBrowse: theme-top виден на десктопе, theme-down — на мобильных */
  ${({ $variant }) =>
    $variant === 'top' &&
    `
      display: block;
      @media screen and (max-width: 495px) { display: none; }
    `}
  ${({ $variant }) =>
    $variant === 'down' &&
    `
      display: none;
      margin-bottom: 20px;
      @media screen and (max-width: 495px) { display: block; }
    `}
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.colors.textMain};
=======
`;

export const Subttl = styled.p`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.text};
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

<<<<<<< HEAD
export const CategoriesThemes = styled.div`
=======
export const Themes = styled.div`
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

<<<<<<< HEAD
export const CategoryItem = styled.div`
=======
export const ThemeChip = styled.div`
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
<<<<<<< HEAD
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  cursor: ${({ $readOnly }) => ($readOnly ? 'default' : 'pointer')};
  opacity: ${({ $active, $readOnly }) => ($readOnly || $active ? 1 : 0.4)};
  transition: opacity 0.2s;
  background-color: ${({ $type, theme }) => theme.colors[$type]?.bg || '#ccc'};
  color: ${({ $type, theme }) => theme.colors[$type]?.text || '#000'};

  &:hover {
    opacity: ${({ $readOnly }) => ($readOnly ? 1 : 0.7)};
  }
`;
=======
  cursor: pointer;

  opacity: ${({ $active }) => ($active ? 1 : 0.4)};

  background-color: ${({ theme, $class }) =>
    (theme.topics[$class] || theme.topics._gray).bg};
  color: ${({ theme, $class }) =>
    (theme.topics[$class] || theme.topics._gray).color};

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
