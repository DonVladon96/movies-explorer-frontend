import React, {useContext, useEffect, useState} from "react";
import "./Profile.css";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {useNavigate} from "react-router-dom";
import { PROFILE_UPDATE_OK_STATUS } from "../../utils/constants";
import {CurrentUserContext} from "../App/App";
import MainApi from "../../utils/Api/MainApi";


function Profile() {
  const [isUpdate, setIsUpdate] = useState(false)
  const navigate = useNavigate()
  const { user, setUser, setLogedId, openPopup } = useContext(CurrentUserContext);

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  const [isEditing, setIsEditing] = useState(false);

  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)


  const [errorMessageName, setErrorMessageName] = useState('Введите имя')
  const [errorMessageEmail, setErrorMessageEmail] = useState('Введите email')


  useEffect(()=>{
    MainApi.getProfile()
      .then(data => {
        setUser(data);
        setName(data.name)
        setEmail(data.email)

      }).catch(error=>{
      console.error('Ошибка в методе getProfile ', error)
    })
  },[])

  useEffect(() => {
    if((user.name !== name || user.email !== email)){
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }, [user, email, name])

  const handleProfileUpdate = (name, email) => {
    handleEditClick()

     MainApi.updateProfile({name: name, email: email})
      .then(data => {
        setUser(data);
        if (data.message) {
          openPopup(data.message)
        } else {
          openPopup(PROFILE_UPDATE_OK_STATUS)
        }
      }
      )
      .catch(error => {
        console.error('Введите данные в поля ввода', error)
      });
  }


  useEffect(() => {
    if ((user.name !== name || user.email !== email)) {
      setIsUpdate(true)
    } else {
      setIsUpdate(false)
    }
  }, [user, email, name])

  const handleExitClick = () => {
    localStorage.clear();
    setLogedId(false);
    navigate("/");
    window.location.reload();
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


  const handleEditClick = () => {
    setIsEditing(true);
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    nameInput.focus();
    emailInput.focus();
  };

  return (
    <>
      <HeaderLogedin loged={true}/>
      <main className="profile">
        <section className='profile__container'>
          <h1 className='profile__title'>Привет, {user?.name}</h1>
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
                       pattern='[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}'
                       onChange={e => nameHandler(e)}
                       id='name-input'
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
                       id='email-input'
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
