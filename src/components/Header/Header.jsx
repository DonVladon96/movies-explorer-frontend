import './Header.css';
import {Link, NavLink} from "react-router-dom";
import Button from "../Button/Button";

function Header() {

  return (<>
    <header className='header'>
      <nav className='header__container'>
        <a className='header__logo anim-logo' href='/'></a>

        <ul className='header__button-container'>
          <li>
            <form action='/signup'>
              <button type="button" className='header__button-signup'>Регистрация</button>
            </form>
          </li>
          <li>
            <form action='/signup'>
              <button type="button" className={`header__button-signing header__button-green`}>Войти</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  </>);
}

export default Header;
