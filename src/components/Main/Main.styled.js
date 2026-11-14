import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
<<<<<<< HEAD
  padding: 25px 0px 49px;
=======
  background-color: ${({ theme }) => theme.mainBg};
`;

export const MainBlock = styled.div`
  width: 100%;
>>>>>>> 53f5d4515d6d2ec2ae756dac788a480a72fa6bd6
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.bgMain};
  .container { max-width:
   1260px; 
   margin: 0 auto;
     }
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1200px) { display: block; }
`;
export const Loading = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 100px 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;