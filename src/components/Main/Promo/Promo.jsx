import React from "react";
import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {

  return (
    <section className="Promo">
      <div className="Promo__container">
        <h1 className="Promo__title">Здесь вы можете ознакомиться с моими работами, а также посмотреть фильмы после регистрации :).</h1>
        <NavTab/>
      </div>
    </section>
  )
}

export default Promo;
