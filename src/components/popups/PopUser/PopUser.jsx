import {
  PopUserBox, PopUserName, PopUserMail, PopUserTheme, ExitBtn, Checkbox,
} from './PopUser.styled.js';

export default function PopUser({ isDark, onExit, onThemeToggle }) {
  return (
    <PopUserBox role="menu" aria-label="Меню пользователя">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <label htmlFor="theme-toggle">Темная тема</label>
        <Checkbox
          id="theme-toggle"
          type="checkbox"
          checked={!!isDark}
          onChange={(e) => onThemeToggle?.(e.target.checked)}
        />
      </PopUserTheme>
      <ExitBtn type="button" onClick={onExit}>Выйти</ExitBtn>
    </PopUserBox>
  );
}