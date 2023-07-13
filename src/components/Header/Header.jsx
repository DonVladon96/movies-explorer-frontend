import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {

  return (<>
    <header className='header'>
      <nav className='header__container'>
        <NavLink to="/">
          <button type="submit" className='header__logo anim-logo'/>
        </NavLink>

        <ul className='header__button-container'>
          <NavLink to="/signup">
            <button type="submit" className='header__button-signup'>Регистрация</button>
          </NavLink>

          <NavLink to="/signin">
            <button type="submit" className={`header__button-signing`}>Войти</button>
          </NavLink>
        </ul>
      </nav>
    </header>
  </>);
}

export default Header;
