import React, {useState} from "react";
import "./BurgerMenu.css";
import Logo from "../../images/burger-menu.svg";
import ButtonClose from "../../images/closeButton.svg";
import {Link, NavLink} from "react-router-dom";
import icon from "../../images/icon.svg";

function BurgerMenu() {

  const [menuIsActive, setMenuIsActive] = useState(false)

  return (
    <div className="burgermenu">

      {!menuIsActive && <div className="burger-menu__notactive">
        <button className="burger-menu__button" onClick={() => setMenuIsActive(prev => setMenuIsActive(!prev))}>
          <img className='burger-menu__button-icon' src={Logo} alt="меню"/>
        </button>
      </div>}

      {menuIsActive &&
        <div className="burger-container">
          <div className="burger-menu__active">
            <button className="burger-menu__close" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}>
              <img src={ButtonClose} alt="закрыть меню"/>
            </button>
            <nav className="burger-menu__links">
              <Link className="burger-menu__link" to="/">Главная</Link>
              <Link className="burger-menu__link burger-menu__link_active" to="/movies">Фильмы</Link>
              <Link className="burger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
            </nav>
            <nav className='burger-menu__footer'>
              <NavLink to="/profile" className="header__account-button">
                Аккаунт
                <div className="header__wrapper">
                  <img className="header__navigation-logo" src={icon} alt="аккаунт"/>
                </div>
              </NavLink>
            </nav>
          </div>
        </div>
      }
    </div>
  );
}

export default BurgerMenu;
