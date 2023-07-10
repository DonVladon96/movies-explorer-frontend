import './Header.css';
import Logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";

function Header() {

  return (<>
    <header className='header'>
      <div className='header__container'>
        <NavLink to="/">
          <img className='header__logo anim-logo' src={Logo} alt="Логотип"/>
        </NavLink>
        <nav className='header__button-container'>
          <NavLink className={`header__button-signup`} to="/signup">Регистрация</NavLink>
          <NavLink className={`header__button-signing`} to="/signin">Войти</NavLink>
        </nav>
      </div>
    </header>
  </>);
}

export default Header;
