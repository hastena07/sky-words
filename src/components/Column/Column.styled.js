import styled from 'styled-components';

export const ColumnBlock = styled.div`
  width: 20%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

<<<<<<< HEAD
export const ColumnTitle = styled.div`
=======
export const Title = styled.div`
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  padding: 0 10px;
  margin: 15px 0;

  p {
<<<<<<< HEAD
    color: ${({ theme }) => theme.colors.textMuted};
=======
    color: ${({ theme }) => theme.textGray};
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
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
<<<<<<< HEAD
`;
=======
`;
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
