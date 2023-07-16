import React from "react";
import "./NavTab.css";
import {Link} from "react-router-dom";

function NavTab() {
  return (
    <nav className="navtab">
      <a href="/#about" className="navtab__link-aboute">
        <button type="button" className="navtab__button">О проекте</button>
      </a>
      <a href="/#techs" className="navtab__link-techs">
        <button type="button" className="navtab__button">Технологии</button>
      </a>
      <a href='/#student' className="navtab__link-student">
        <button type="button" className="navtab__button">Студент</button>
      </a>
    </nav>
  );
}

export default NavTab;
