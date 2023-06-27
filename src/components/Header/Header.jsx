import './Header.css';
import Logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";

function Header() {

  return (<>
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={Logo} alt="Логотип"/>
        <nav className='header__button-container'>
          <NavLink className={`header__button-signup`}>Регистрация</NavLink>
          <NavLink className={`header__button-signing`}>Войти</NavLink>
        </nav>
      </div>
    </header>
  </>);
}

export default Header;
