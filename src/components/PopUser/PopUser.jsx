// src/components/PopUser/PopUser.jsx
import { useState } from 'react';
import './PopUser.css';

const PopUser = ({ userName, userEmail, onLogout, onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Закрываем меню, если кликнули мимо
  const handleClickOutside = (event) => {
    if (event.target.closest('.PopUser') === null) {
      setIsMenuOpen(false);
    }
  };

  // Добавляем обработчик на документ, когда меню открыто
  // Это стандартный паттерн для выпадающих списков
  // В упрощенной версии можно пока без этого, но с ним надежнее
  // React 18+ требует useEffect для таких подписок
  // Пока сделаем простую версию без useEffect, а клик по имени будет просто переключать состояние

  return (
    <div className="PopUser">
      
      <a href="#"
        type="button"
        className="Header__user _hover02"
        onClick={toggleMenu}
      >
        {userName}
      </a>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <div className="Header__pop-user-set Pop-user-set" id="user-set-target">
          <p className="Pop-user-set__name">{userName}</p>

          <p className="Pop-user-set__mail ">{userEmail}</p>

          <div className="Pop-user-set__theme">
              <p>Темная тема</p>
              <input type="checkbox" name="checkbox" />
            
          </div>

          <button
            type="button"
            className="_hover03"
            id="btnExit"
            onClick={onLogout}
          >
            Выйти
          </button>

          {/* <div className="PopUser__auth-link">
            <span>Нет аккаунта?</span>
            <button
              type="button"
              className="PopUser__link _hover04 PopUser__action-btn"
              onClick={() => {
                onOpenAuth('signup');
                setIsMenuOpen(false); // Закрываем меню после клика
              }}
            >
              Зарегистрироваться
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default PopUser;