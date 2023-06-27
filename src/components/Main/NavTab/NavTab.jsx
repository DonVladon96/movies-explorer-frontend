import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <div className="navtab">
      <a href="#about" className="navtab__link-aboute">
        <button className="navtab__button">О проекте</button>
      </a>
      <a href="#about" className="navtab__link-techs">
        <button className="navtab__button">Технологии</button>
      </a>
      <a href="#about" className="navtab__link-student">
        <button className="navtab__button">Студент</button>
      </a>
    </div>
  );
}

export default NavTab;
