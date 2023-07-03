import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {

  return(
    <>
      <Header loged={true}/>
      <section className="profile">
        <div className='profile__content'>
          <h2 className='profile__title'>Привет!</h2>
          <form className='profile__form' onSubmit={e => e.preventDefault()}>
            <fieldset className='profile__fieldset'>
              <label className='profile__fields'>
                <p className='profile__input-name'>Имя</p>
                <input className='profile__input'/>
              </label>
              <div className="profile__line"></div>
              <label className='profile__fields'>
                <p className='profile__input-email'>E-mail</p>
                <input className='profile__input'/>
              </label>
            </fieldset>
            <div className='profile__nav'>
              <button className='profile__button_edit' type='submit'>Редактировать</button>
              <button className='profile__button_signin' >Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
