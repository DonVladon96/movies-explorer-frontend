import React from "react";
import "./NavTab.css";
import {Link} from "react-router-dom";

function NavTab() {
  return (



    <ul className="navtab">

      <li className="navtab__button">
        <a
          href="/#about"
          className="navtab__link-aboute navtab__button">
          О проекте
        </a>
      </li>
      <li className="navtab__button">
        <a
          href="/#techs"
          className="navtab__link-techs navtab__button">
          Технологии
        </a>
      </li>
      <li className="navtab__button">
        <a
          href="/#student"
          className="navtab__link-student navtab__button">
          Студент
        </a>
      </li>

    </ul>
  );
}

export default NavTab;
