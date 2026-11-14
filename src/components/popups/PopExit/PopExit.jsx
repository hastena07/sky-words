import { useNavigate } from 'react-router-dom';
import {
  ExitWrap, ExitContainer, ExitBlock, ExitTitle, ExitGroup, BtnYes, BtnNo,
} from './PopExit.styled.js';

export default function PopExit({ onClose }) {
  const navigate = useNavigate();

  return (
    <ExitWrap>
      <ExitContainer onClick={onClose}>
        <ExitBlock onClick={(e) => e.stopPropagation()}>
          <ExitTitle>Выйти из аккаунта?</ExitTitle>
          <ExitGroup>
            <BtnYes type="button" onClick={() => navigate('/signin')}>
              Да, выйти
            </BtnYes>
            <BtnNo type="button" onClick={onClose}>Нет, остаться</BtnNo>
          </ExitGroup>
        </ExitBlock>
      </ExitContainer>
    </ExitWrap>
  );
}