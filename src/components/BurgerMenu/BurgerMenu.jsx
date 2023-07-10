import React from "react";
import "./BurgerMenu.css";
import burgermenuLogo from "../../images/burger-menu.svg";
import burgermenuButtonClose from "../../images/closeButton.svg";
import {Link, NavLink} from "react-router-dom";
import icon from "../../images/icon.svg";

function BurgerMenu() {

  return (
    <div className="burgermenu">

      <div className="burger-menu__notactive">
        <button className="burger-menu__button">
          <img src={burgermenuLogo} alt="меню"/>
        </button>
      </div>

      <div className="burger-container">
        <div className="burger-menu__active">
          <button className="burger-menu__close">
            <img src={burgermenuButtonClose} alt="закрыть меню"/>
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
