import PopUser from '../PopUser/PopUser';
import logo from '../assets/logo.png';
import {
  Header as HeaderStyled,
  HeaderBlock, Logos, LogoLight, LogoDark, HeaderNav, BtnMainNew,
} from './Header.styled';

const Header = ({
  userName, userEmail, onUserClick, onNewCard, isDark, onToggleTheme,
}) => {
  return (
    <HeaderStyled>
      <HeaderBlock>
        <Logos>
          <LogoLight href="/"><img src={logo} alt="Логотип" /></LogoLight>
          <LogoDark href="/"><img src={logo} alt="Логотип" /></LogoDark>
        </Logos>

        <HeaderNav>
          <BtnMainNew type="button" id="btnMainNew" onClick={() => onNewCard()}>
            Создать новую задачу
          </BtnMainNew>

          <PopUser
            userName={userName}
            userEmail={userEmail}
            onUserClick={onUserClick}
            isDark={isDark}
            onToggleTheme={onToggleTheme}
          />
        </HeaderNav>
      </HeaderBlock>
    </HeaderStyled>
  );
};

export default Header;
