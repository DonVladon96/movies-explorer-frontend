import React, {useEffect, useState} from "react";
import "./Profile.css";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {useNavigate} from "react-router-dom";
import {INPUT_ERROR_NAME as user} from "../../utils/constants";

function Profile() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isUpdate, setIsUpdate] = useState(false)
  const navigate = useNavigate()

  const handleProfileUpdate = () => {
    console.log('Добавить функционал на 4 этапе')
  }

  useEffect(() => {
    if ((user.name !== name || user.email !== email)) {
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }, [user, email, name])

  const handleExitClick = () => {
    navigate('/')
  }

  return (
    <>
      <HeaderLogedin/>
      <main className="profile">
        <section className='profile__container'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form'>
            <div className='profile__inputs-container'>
              <div className='profile__lable-container'>
                <label className='profile__name'>Имя</label>
                <input className='profile__input'
                       type='text'
                       placeholder='Имя'
                       required
                       minLength={2}
                       maxLength={30}
                       onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="profile__line"></div>
              <div className='profile__lable-container'>
                <label className='profile__email'>E-mail</label>
                <input className='profile__input'
                       type='email'
                       name='email'
                       value={email}
                       placeholder='E-mail'
                       onChange={(event) => setEmail(event.target.value)}
                       required
                />
              </div>
            </div>
            <div className='profile__navigate'>
              <button className='profile__button-edit' type="button" onClick={() => handleProfileUpdate(name, email)}
                      disabled={!isUpdate}>Редактировать
              </button>
              <button type="button" onClick={handleExitClick} className='profile__button-text'>Выйти из аккаунта</button>


            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
