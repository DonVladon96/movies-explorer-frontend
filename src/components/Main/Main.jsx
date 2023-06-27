import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "./Promo/Promo";

function Main() {

  return (
    <div className="content-container">
      <Header/>
      <main>
      <Promo/>
      </main>
    </div>
  )
}

export default Main;
