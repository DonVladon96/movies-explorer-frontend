import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {

  return (<>
    <header className='header'>
      <nav className='header__container'>
        <a className='header__logo anim-logo' href='/'></a>

        <ul className='header__button-container'>
          <li>
            <form action='/signup'>
              <button type="submit" className='header__button-signup'>Регистрация</button>
            </form>
          </li>
          <li>
            <form action='/signup'>
              <button type="submit" className={`header__button-signing`}>Войти</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  </>);
}

export default Header;
