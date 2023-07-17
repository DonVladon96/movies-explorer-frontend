import React from "react";
import "./NavTab.css";
import {Link} from "react-router-dom";

function NavTab() {
  return (



    <nav className="navtab">

      <li className="navtab__link-aboute">
        <a
          href="/#about"
          className="navtab__button">
          О проекте
        </a>
      </li>
      <li>
        <a
          href="/#techs"
          className="navtab__link-techs navtab__button">
          Технологии
        </a>
      </li>
      <li>
        <a
          href="/#student"
          className="navtab__link-student navtab__button">
          Студент
        </a>
      </li>



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
