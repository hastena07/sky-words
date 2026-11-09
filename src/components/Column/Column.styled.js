import styled from 'styled-components';

export const ColumnBlock = styled.div`
  width: 20%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: ${({ theme }) => theme.textGray};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const Cards = styled.div`
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: flex;
    overflow-y: auto;
  }
`;
