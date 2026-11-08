// src/components/PopUser/PopUser.jsx
import { useState, useRef, useEffect } from 'react';
import {
  Wrapper, HeaderUser, PopUserSet, SetName, SetMail, ThemeToggle, BtnExit,
  Checkbox,
} from './PopUser.styled';

const PopUser = ({ userName, userEmail, onUserClick, onOpenAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rootRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Закрываем меню, если кликнули мимо
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Wrapper ref={rootRef}>
      <HeaderUser as="a" href="#" onClick={toggleMenu}>
        {userName}
      </HeaderUser>

      {/* Выпадающее меню */}
      {isMenuOpen && (
        <PopUserSet>
          <SetName>{userName}</SetName>
          <SetMail>{userEmail}</SetMail>

          <ThemeToggle>
            <p>Темная тема</p>
            <Checkbox type="checkbox" name="checkbox" />
          </ThemeToggle>

          <BtnExit type="button" id="btnExit" onClick={onUserClick}>
            Выйти
          </BtnExit>

          {/* <div>
            <span>Нет аккаунта?</span>
            <button
              type="button"
              onClick={() => {
                onOpenAuth('signup');
                setIsMenuOpen(false); // Закрываем меню после клика
              }}
            >
              Зарегистрироваться
            </button>
          </div> */}
        </PopUserSet>
      )}
    </Wrapper>
  );
};

export default PopUser;
