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
    <nav className="header-logedin">
      <NavLink to="/">
        <img className="header-logedin__logedin-logo anim-logo" src={logo} alt="Логотип"/>
      </NavLink>

      <div>
        <div className={`header-logedin__overlay ${openBurger ? 'header__overlay_active' : ''}`}/>
        <button type="button"
          className="header-logedin__burger"
          onClick={handleToggleBurger}>
          <menu className='header-logedin__wrapper'>
            <li
              className={`header-logedin__burger-icon ${openBurger ? 'header__burger-active' : ''}`}/>
          </menu>
        </button>

        <Navigation
          isOpenBurger={openBurger}/>
      </div>
    </nav>
  );
}

export default HeaderLogedin;
