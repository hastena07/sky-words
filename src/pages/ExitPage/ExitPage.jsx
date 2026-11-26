import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import {
  ExitPageWrapper, ExitPageBlock, ExitPageTitle, ExitPageGroup,
  ExitPageYes, ExitPageNo,
} from './ExitPage.styled.js';

export default function ExitPage() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const close = () => navigate('/');

  const handleExit = () => {
    logout();
    navigate('/login');
  };

  return (
    <ExitPageWrapper onClick={close}>
      <ExitPageBlock onClick={(e) => e.stopPropagation()}>
        <ExitPageTitle>Выйти из аккаунта?</ExitPageTitle>
        <ExitPageGroup>
          <ExitPageYes type="button" onClick={handleExit}>Да, выйти</ExitPageYes>
          <ExitPageNo type="button" onClick={close}>Нет, остаться</ExitPageNo>
        </ExitPageGroup>
      </ExitPageBlock>
    </ExitPageWrapper>
  );
}