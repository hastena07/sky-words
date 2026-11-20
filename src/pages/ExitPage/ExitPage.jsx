import { useNavigate } from 'react-router-dom';
import {
  ExitPageWrapper, ExitPageBlock, ExitPageTitle, ExitPageGroup,
  ExitPageYes, ExitPageNo,
} from './ExitPage.styled.js';

export default function ExitPage({ logout }) {
  const navigate = useNavigate();

  const handleExit = () => {
    logout();
    navigate('/login');
  };

  return (
    <ExitPageWrapper>
      <ExitPageBlock>
        <ExitPageTitle>Выйти из аккаунта?</ExitPageTitle>
        <ExitPageGroup>
          <ExitPageYes type="button" onClick={handleExit}>Да, выйти</ExitPageYes>
          <ExitPageNo type="button" onClick={() => navigate('/')}>
            Нет, остаться
          </ExitPageNo>
        </ExitPageGroup>
      </ExitPageBlock>
    </ExitPageWrapper>
  );
}