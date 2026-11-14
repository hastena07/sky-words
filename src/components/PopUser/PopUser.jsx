import { useState, useRef, useEffect } from 'react';
import {
  Wrapper, HeaderUser, PopUserSet, SetName, SetMail,
  ThemeToggle, Checkbox, BtnExit,
} from './PopUser.styled';

const PopUser = ({ userName, userEmail, onUserClick, isDark, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const rootRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
      <HeaderUser type="button" onClick={toggleMenu}>
        {userName}
      </HeaderUser>

      {isMenuOpen && (
        <PopUserSet>
          <SetName>{userName}</SetName>
          <SetMail>{userEmail}</SetMail>

          <ThemeToggle>
            <p>Темная тема</p>
            <Checkbox
              type="checkbox"
              name="checkbox"
              checked={isDark}
              onChange={onToggleTheme}
            />
          </ThemeToggle>

          <BtnExit type="button" id="btnExit" onClick={onUserClick}>
            Выйти
          </BtnExit>
        </PopUserSet>
      )}
    </Wrapper>
  );
};

export default PopUser;
