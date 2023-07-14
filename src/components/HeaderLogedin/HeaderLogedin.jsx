import React, { useState} from "react";
import "./HeaderLogedin.css";
import "../Anim-logo/Anim-logo.css"
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import {NavLink} from "react-router-dom";


function HeaderLogedin() {

  const [openBurger, setOpenBurger] = useState(false);

  function handleToggleBurger() {
    setOpenBurger(!openBurger);
  }

  return (
    <header className="header__logedin">
      <NavLink to="/">
        <img className="header__logedin-logo anim-logo" src={logo} alt="Логотип"/>
      </NavLink>

      <div>
        <div className={`header__overlay ${openBurger ? 'header__overlay_active' : ''}`}/>
        <button
          className="header__burger"
          onClick={handleToggleBurger}>
          <div
            className={`header__burger-icon ${openBurger ? 'header__burger-active' : ''}`}/>
          <div></div>
        </button>
        <Navigation
          isOpenBurger={openBurger}/>
      </div>
    </header>
  );
}

export default HeaderLogedin;
