import React from "react";
import "./HeaderLogedin.css";
import "../Anim-logo/Anim-logo.css"
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import icon from "../../images/icon.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import burgermenuLogo from "../../images/burger-menu.svg";

function HeaderLogedin() {

  return(
    <header className="header__logedin">
      <div className="header__logedin-container">
        <NavLink to="/" >
          <img className="header__logedin-logo anim-logo" src={logo} alt="Логотип" />
        </NavLink>
        {/*Раскрыть, когда буду делать функционал*/}
        <BurgerMenu />
        <div className="header__movies-container">
          <NavLink to="/movies" className="header__films">
            Фильмы
          </NavLink>

          <NavLink to="/saved-movies" className="header__saved-films">
            Сохранённые фильмы
          </NavLink>
        </div>

        <div className="header__navigation">
          <NavLink to="/profile" className="header__account-button">
            Аккаунт
            <div className="header__wrapper">
              <img className="header__navigation-logo" src={icon} alt="аккаунт" />
            </div>

          </NavLink>
        </div>
        {/*<div className="header__button-box_films">*/}



        {/*</div>*/}
      </div>
    </header>
  );
}

export default HeaderLogedin;
