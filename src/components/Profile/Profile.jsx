import React, {useEffect, useState} from "react";
import "./Profile.css";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {Link} from "react-router-dom";
import {INPUT_ERROR_NAME as user} from "../../utils/constants";

function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isUpdate, setIsUpdate] = useState(false)

  const handleProfileUpdate = () => {
    console.log ('Добавить функционал на 4 этапе')
  }

  useEffect(() => {
    if((user.name !== name || user.email !== email)){
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }, [user, email, name])

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
                <input className='profile__input'
                       type='text'
                       placeholder='Имя'
                       required
                       onChange={(event) => setName(event.target.value)}
                />
              </label>
              <div className="profile__line"></div>
              <label className='profile__lable-container'>
                <p className='profile__email'>E-mail</p>
                <input className='profile__input'
                       type='email'
                       name='email'
                       value={email}
                       placeholder='E-mail'
                       onChange={(event) => setEmail(event.target.value)}
                       required
                />
              </label>
            </fieldset>
            <div className='profile__navigate'>
              <button className='profile__button-edit' type='submit' onClick={() => handleProfileUpdate(name, email)}
                      disabled={!isUpdate}>Редактировать
              </button>
              <Link to="/" className="profile__button-exit">
                <button className='profile__button-text'>Выйти из аккаунта</button>
              </Link>

            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
