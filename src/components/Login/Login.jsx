import "./Login.css";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo.svg"
import React, {useContext, useEffect, useState} from "react";
import MainApi from "../../utils/Api/MainApi";
import {CurrentUserContext} from "../App/App";
import {LOGIN_ERROR_STATUS} from "../../utils/constants";
import InfoTooltip from "../InfoTooltip/InfoTooltip";


function Login( ) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [errorEmailState, setErrorEmailState] = useState('Введите email')
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [errorMessagePassword, setErrorMessagePassword] = useState('Введите пароль')
  const [inputValid, setInputValid] = useState(false)
  const { setLogedId, setInfoMessage, isInfoMessage, closePopup, closePopupHello } = useContext(CurrentUserContext);
  const navigate = useNavigate();




  const hendleLoginClick = async () => {
    MainApi.signin({email, password})
      .then(data => {
        if(data.message) {
          console.error(data.message)
        } else {
          localStorage.setItem('token', data.token)
          setLogedId(true)
          navigate("/movies")
          setInfoMessage('Вы успешно вошли!')
          handleShowInfoMessage({
            text: 'Вы успешно вошли!',
            isSuccess: true
          })
          setTimeout(closePopupTimer, 2000);
        }
      }).catch(error=>{
      console.log(LOGIN_ERROR_STATUS, error)
      const text = 'Что-то пошло не так! Попробуйте еще раз.';
      handleShowInfoMessage({
        text: text,
        isSuccess: false
      });
    });
  }

  useEffect(() => {
    if (errorEmailState || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorEmailState, errorMessagePassword])



  const emailHandler = (event) => {
    blurHandler(event)
    setEmail(event.target.value)
    const pattern = /^\w+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pattern.test(String(event.target.value).toLocaleLowerCase())) {
      setErrorEmailState("Неккоректный email")
    } else {
      setErrorEmailState("")
    }
  }

  const passwordHandler = (event) => {
    blurHandler(event)
    setPassword(event.target.value)
    if (event.target.value.length < 4 || event.target.value.length > 8) {
      setErrorMessagePassword("Пароль должен содержать от 4 до 8 символов")
      if (!event.target.value) {
        setErrorMessagePassword("Пароль не может быть пустым")
      }
    } else {
      setErrorMessagePassword("")
    }
  }

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true)
        break

      case "password":
        setPasswordDirty(true)
        break
    }
  }

  useEffect(() => {
    if (errorEmailState || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorEmailState, errorMessagePassword])

  function handleShowInfoMessage(message) {
    setInfoMessage(message);
  }

  const [popupOpen, setPopupOpen] = useState(false)
  const [popupMessage, setPopupMessage] = useState("");



  const openPopup = (message) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };

  function closePopupTimer() {
    closePopupHello();
    setInfoMessage(null)
  }

  function closePopupsOnOutsideClick(evt) {
    const target = evt.target;
    const checkSelector = (selector) => target.classList.contains(selector);

    if (checkSelector('popup_opened') || checkSelector('popup__close')) {
      closePopupHello();
    }
    setInfoMessage(null)
  }

  return (
    <main className="login">
      <section className="login__container">
        <div className="login__logo-container">
          <Link to="/">
            <img src={logo} alt="Логотип" className="login__logo anim-logo"/>
          </Link>
        </div>
        <h1 className="login__title">Рады видеть!</h1>
        <form noValidate name="login__form" className="login__form" onSubmit={event => event.preventDefault()}>
          <div className="login__inputs-container">
            <div>
              <label className="login__email">E-mail</label>
              <input className="login__input"
                     type="email"
                     name="email"
                     autoComplete="off"
                     placeholder="Введите Ваш E-mail"
                     minLength={2}
                     maxLength={30}
                     pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                     required={true}
                     value={email || ''}
                     onChange={event => emailHandler(event)}/>
              {(emailDirty && errorEmailState) && <div className="login__error">{errorEmailState}</div>}
            </div>

            <div>
              <label className="login__password">Пароль</label>
              <input className="login__input"
                     type="password"
                     name="password"
                     autoComplete="off"
                     placeholder="Пароль"
                     minLength={4}
                     maxLength={8}
                     required={true}
                     value={password || ''}
                     onChange={event => passwordHandler(event)}
              />
              {(passwordDirty && errorMessagePassword) && <div className="login__error">{errorMessagePassword}</div>}
            </div>
          </div>
          <div className="login__button-container">
            <button className="login__button" type="submit" onClick={hendleLoginClick} disabled={!inputValid}>Войти</button>
            <Link className="login__link" to="/signup">
              Ещё не зарегистрированы?
              <span className="login__register">Регистрация</span>
            </Link>
          </div>
        </form>
        <InfoTooltip
          message={isInfoMessage}
          closePopupHello={closePopupHello}
          closePopupsOnOutsideClick={closePopupsOnOutsideClick}

        />
      </section>
    </main>);
}

export default Login;
