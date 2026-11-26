import { useState } from 'react';
import { Link } from 'react-router-dom';
import PopUser from '../PopUser/PopUser.jsx';
import {
  HeaderBlock, HeaderBlockInner, HeaderLogo, HeaderNav,
  BtnMainNew, HeaderUser,
} from './Header.styled.js';
import { Container } from '../../App.styled.js';

export default function Header({ onNewCard, onExit, isDark, onThemeToggle }) {
  const [userOpen, setUserOpen] = useState(false);

  return (
    <HeaderBlock>
      <Container>
        <HeaderBlockInner>
          <HeaderLogo>
            <Link to="/">
              <img src="/images/logo.png" alt="Skypro Kanban" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <BtnMainNew type="button" onClick={onNewCard}>
              Создать новую задачу
            </BtnMainNew>
            <HeaderUser
              type="button"
              aria-expanded={userOpen}
              onClick={() => setUserOpen((p) => !p)}
            >
              Ivan Ivanov
            </HeaderUser>
            {userOpen && (
              <PopUser
                isDark={isDark}
                onThemeToggle={onThemeToggle}
                onExit={() => { setUserOpen(false); onExit(); }}
              />
            )}
          </HeaderNav>
        </HeaderBlockInner>
      </Container>
    </HeaderBlock>
  );
}