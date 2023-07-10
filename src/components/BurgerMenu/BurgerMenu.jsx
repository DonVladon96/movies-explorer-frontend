import React from "react";
import "./BurgerMenu.css";
import burgermenuLogo from "../../images/burger-menu.svg";
import burgermenuButtonClose from "../../images/closeButton.svg";
import {Link, NavLink} from "react-router-dom";
import icon from "../../images/icon.svg";

function BurgerMenu() {

  return (
    <div className="burgermenu">

      <div className="hamburger-menu__notactive">
        <button className="hamburger-menu__button">
          <img src={burgermenuLogo} alt="бургер меню логотип"/>
        </button>
      </div>

      <div className="hamburger-bg">
        <div className="hamburger-menu__active">
          <button className="hamburger-menu__close">
            <img src={burgermenuButtonClose} alt="бургер меню закрыть"/>
          </button>
          <nav className="hamburger-menu__links">
            <Link className="hamburger-menu__link" to="/">Главная</Link>
            <Link className="hamburger-menu__link hamburger-menu__link_active" to="/movies">Фильмы</Link>
            <Link className="hamburger-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
          </nav>
          <nav className='hamburger-menu__footer'>
            <NavLink to="/profile" className="header__account-button">
              Аккаунт
              <div className="header__wrapper">
                <img className="header__navigation-logo" src={icon} alt="аккаунт" />
              </div>

            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
