// src/components/Header/Header.jsx
import { useState } from 'react';
import './Header.css';
import PopUser from '../PopUser/PopUser';
import Logo from '../assets/logo.png'; // Убедитесь, что путь к логотипу верен

/**
 * Компонент шапки приложения.
 * Теперь управляет модальным окном подтверждения выхода
 * и кнопкой создания новой задачи.
 */
const Header = ({ userName, userEmail, onLogout, onOpenAuth, onNewCard }) => {
  // Состояние для модального окна выхода
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const openExitPopup = () => setIsExitModalOpen(true);
  const closeExitPopup = () => setIsExitModalOpen(false);
  const handleConfirmExit = () => {
    onLogout();
    closeExitPopup();
  };

  return (
    <>
      <header className="Header">
        <div className='Container-header'> 
          <div className='Header__block'>
            <div className="Header__logo_show_light">
              <a href="/"><img src={Logo} alt="Логотип" /></a>
            </div> 
            <div className="Header__logo_dark">
              <a href="/"><img src={Logo} alt="Логотип" /></a>
            </div>
          </div>
        </div>
      
        <div className="Header__nav">
          {/* Кнопка создания задачи */}
          <button 
            type="button" 
            className="_btn-bg _hover01 header__btn-main-new" 
            id="btnMainNew" 
            onClick={() => onNewCard(0)}
          >
            Создать новую задачу
          </button>

          {/* Профиль пользователя */}
          <PopUser
            userName={userName}
            userEmail={userEmail}
            onLogout={openExitPopup} // Теперь открываем локальный попап
            onOpenAuth={onOpenAuth}
          />
        </div>
      </header>

      {/* Модальное окно подтверждения выхода */}
      {isExitModalOpen && (
        <div className="modal-overlay" onClick={closeExitPopup}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Выйти из аккаунта?</h3>
            <p>Вы уверены, что хотите завершить сеанс?</p>
            <div className="modal-actions">
              <button onClick={handleConfirmExit} className="_btn-bg">Выйти</button>
              <button onClick={closeExitPopup} className="_btn-border">Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;