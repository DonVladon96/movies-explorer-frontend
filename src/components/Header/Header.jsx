import './Header.css';
import {Link, NavLink} from "react-router-dom";
import Button from "../Button/Button";

function Header() {

  return (<>
    <header className='header'>
      <nav className='header__container'>
        <NavLink to="/">
          <button type="button" className='header__logo anim-logo'/>
        </NavLink>

        <ul className='header__button-container'>
          <Link to="/signup">
            <Button className='header__button-signup'>
              Регистрация
            </Button>
          </Link>
          <Link to="/signin">
            <Button className={`header__button-signing header__button-green`}>
              Войти
            </Button>
          </Link>
        </ul>
      </nav>
    </header>
  </>);
}

export default Header;
