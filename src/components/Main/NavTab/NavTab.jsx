import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <ul className="navtab">
      <a href="#about" className="navtab__link-aboute">
        <button className="navtab__button">О проекте</button>
      </a>
      <a href="#techs" className="navtab__link-techs">
        <button className="navtab__button">Технологии</button>
      </a>
      <a href="#student" className="navtab__link-student">
        <button className="navtab__button">Студент</button>
      </a>
    </ul>
  );
}

export default NavTab;
