import React from "react";
import "./Profile.css";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";

function Profile() {

  return (
    <>
      <HeaderLogedin/>
      <section className="profile">
        <div className='profile__container'>
          <h2 className='profile__title'>Привет, Виталий!</h2>
          <form className='profile__form'>
            <fieldset className='profile__inputs-container'>
              <label className='profile__lable-container'>
                <p className='profile__name'>Имя</p>
                <input className='profile__input' type='text' placeholder='Виталий'/>
              </label>
              <div className="profile__line"></div>
              <label className='profile__lable-container'>
                <p className='profile__email'>E-mail</p>
                <input className='profile__input' type='text' placeholder='pochta@yandex.ru'/>
              </label>
            </fieldset>
            <div className='profile__navigate'>
              <button className='profile__button-edit' type='submit'>Редактировать</button>
              <button className='profile__button-exit'>Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
