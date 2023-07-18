import React, {useEffect, useState} from "react";
import "./Profile.css";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {useNavigate} from "react-router-dom";
import {INPUT_NAME_ERROR as user} from "../../utils/constants";

function Profile() {
  const [isUpdate, setIsUpdate] = useState(false)
  const navigate = useNavigate()


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [inputValid, setInputValid] = useState(false)

  const [errorMessageName, setErrorMessageName] = useState('Введите имя')
  const [errorMessageEmail, setErrorMessageEmail] = useState('Введите email')
  const [errorMessagePassword, setErrorMessagePassword] = useState('Введите пароль')

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

  const nameHandler = (evt) => {
    blurHandler(evt)
    setName(evt.target.value)
    const pattern = /^[A-Za-zА-Яа-яЁё /s -]{4,}/
    if (!pattern.test(String(evt.target.value).toLocaleLowerCase())) {
      setErrorMessageName("Неккоректное имя")
    } else {
      setErrorMessageName("")
    }
  }

  const blurHandler = (evt) => {
    switch (evt.target.name) {
      case "name":
        setNameDirty(true)
        break

      case "email":
        setEmailDirty(true)
        break

      case "password":
        setPasswordDirty(true)
        break
    }
  }

  const emailHandler = (evt) => {
    blurHandler(evt)
    setEmail(evt.target.value)
    const pattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pattern.test(String(evt.target.value).toLocaleLowerCase())) {
      setErrorMessageEmail("Неккоректный email")
    } else {
      setErrorMessageEmail("")
    }
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
                       required={true}
                       value={name}
                       minLength={4}
                       maxLength={30}
                       pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                       onChange={e => nameHandler(e)}
                />
              </div>
              {(nameDirty && errorMessageName) && <div className="register__error">{errorMessageName}</div>}
              <div className="profile__line"></div>
              <div className='profile__lable-container'>
                <label className='profile__email'>E-mail</label>
                <input className='profile__input'
                       type='email'
                       name='email'
                       value={email}
                       placeholder='E-mail'
                       pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                       required={true}
                       minLength={2}
                       maxLength={30}
                       onChange={e => emailHandler(e)}/>
              </div>
              {(emailDirty && errorMessageEmail) && <div className="register__error">{errorMessageEmail}</div>}
            </div>
            <div className='profile__navigate'>
              <button className='profile__button-edit' type="button" onClick={() => handleProfileUpdate(name, email)}
                      disabled={!isUpdate}>Редактировать
              </button>
              <button type="button" onClick={handleExitClick} className='profile__button-text'>Выйти из аккаунта
              </button>


            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
