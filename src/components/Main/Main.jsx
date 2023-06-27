import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";

function Main() {

  return (
    <div className="content-container">
      <Header/>
      <main>
        <Promo/>
        <AboutProject/>
      </main>
    </div>
  )
}

export default Main;
