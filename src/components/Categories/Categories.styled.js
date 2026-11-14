import styled from 'styled-components';

export const CategoriesBlock = styled.div`
  margin-bottom: 20px;
`;

export const Subttl = styled.p`
  margin: 0 0 14px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Themes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ThemeChip = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
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
