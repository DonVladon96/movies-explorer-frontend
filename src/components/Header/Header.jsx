import './Header.css';
import Logo from '../../images/logo.svg'
import {NavLink} from "react-router-dom";

function Header() {

  return (<>
    <header className='header'>
      <div className='header__container'>
        <NavLink to="/">
          <button className='header__logo anim-logo'/>
        </NavLink>
        <nav className='header__button-container'>
          <NavLink to="/signup">
            <button className='header__button-signup'>Регистрация</button>
          </NavLink>


          <NavLink to="/signin">
            <button className={`header__button-signing`}>Войти</button>
          </NavLink>

        </nav>
      </div>
    </header>
  </>);
}

export default Header;
