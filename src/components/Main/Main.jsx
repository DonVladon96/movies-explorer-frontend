import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";

function Main() {

  return (
    <div className="content-container">
      <Header/>
      <main>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </main>
    </div>
  )
}

export default Main;
