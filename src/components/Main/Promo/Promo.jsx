import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {

  return (
    <section className="Promo">
      <div className="Promo__container">
        <h1 className="Promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab/>
      </div>
    </section>
  )
}

export default Promo;
