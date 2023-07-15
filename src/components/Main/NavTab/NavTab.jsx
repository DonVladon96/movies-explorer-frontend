import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <form action="/#about" className="navtab__link-aboute">
        <button type={"submit"} className="navtab__button">О проекте</button>
      </form>
      <form action="/#techs" className="navtab__link-techs">
        <button type={"submit"} className="navtab__button">Технологии</button>
      </form>
      <form action='/#student' className="navtab__link-student">
        <button type={"submit"} className="navtab__button">Студент</button>
      </form>
    </nav>
  );
}

export default NavTab;
