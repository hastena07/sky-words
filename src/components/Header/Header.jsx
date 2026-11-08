import { useState } from 'react';
import PopUser from '../PopUser/PopUser';
import Logo from '../assets/logo.png';
import {
  Header as HeaderStyled,
  HeaderBlock,
  HeaderNav,
  LogoLight,
  LogoDark,
  BtnMainNew,
  ModalOverlay,
  ModalContent,
  ModalActions,
} from './Header.styled';
import { Container } from '../../App.styled';
import { BtnBg, BtnBorder } from '../ui/Buttons.styled';

const Header = ({ userName, userEmail, onUserClick, onOpenAuth, onNewCard }) => {
  // Состояние для модального окна выхода
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const openExitPopup = () => setIsExitModalOpen(true);
  const closeExitPopup = () => setIsExitModalOpen(false);
  const handleConfirmExit = () => {
    onUserClick();
    closeExitPopup();
  };

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderBlock>
            <LogoLight>
              <a href="/"><img src={Logo} alt="Логотип" /></a>
            </LogoLight>
            <LogoDark>
              <a href="/"><img src={Logo} alt="Логотип" /></a>
            </LogoDark>

            <HeaderNav>
              {/* Кнопка создания задачи */}
              <BtnMainNew
                type="button"
                id="btnMainNew"
                onClick={() => onNewCard(0)}
              >
                Создать новую задачу
              </BtnMainNew>

              {/* Профиль пользователя */}
              <PopUser
                userName={userName}
                userEmail={userEmail}
                onUserClick={openExitPopup}
                onOpenAuth={onOpenAuth}
              />
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </HeaderStyled>

      {/* Модальное окно подтверждения выхода */}
      {isExitModalOpen && (
        <ModalOverlay onClick={closeExitPopup}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h3>Выйти из аккаунта?</h3>
            <p>Вы уверены, что хотите завершить сеанс?</p>
            <ModalActions>
              <BtnBg type="button" onClick={handleConfirmExit}>Выйти</BtnBg>
              <BtnBorder type="button" onClick={closeExitPopup}>Отмена</BtnBorder>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Header;
