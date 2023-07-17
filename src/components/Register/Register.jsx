import "./Register.css";
import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


function Register() {

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

  useEffect(() => {
    if (errorMessageName || errorMessageEmail || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorMessageName, errorMessageEmail, errorMessagePassword])


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

  const passwordHandler = (e) => {
    blurHandler(e)
    setPassword(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 8) {
      setErrorMessagePassword("Пароль должен содержать от 4 до 8 символов")
      if (!e.target.value) {
        setErrorMessagePassword("Пароль не может быть пустым")
      }
    } else {
      setErrorMessagePassword("")
    }
  }

  return (
    <main className="register">
      <section className="register__container">
        <div className="register__logo-container">
          <Link to="/">
            <img src={logo} alt="Логотип" className="register__logo anim-logo"/>
          </Link>
        </div>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" noValidate name="register-form" onSubmit={e => e.preventDefault()}>
          <div className="register__inputs-container">
            <div className="register__lable">
              <label className="register__name">Имя</label>
              <input className="register__input"
                     type="text"
                     name="name"
                     placeholder="Введите Ваше Имя"
                     minLength={4}
                     maxLength={30}
                     pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                     required={true}
                     value={name}
                     onChange={e => nameHandler(e)}/>
            </div>
            {(nameDirty && errorMessageName) && <div className="register__error">{errorMessageName}</div>}
            <div>
              <label  className="register__email">E-mail</label>
              <input className="register__input"
                     type="email"
                     name="email"
                     placeholder="Введите Ваш E-mail"
                     pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                     required={true}
                     minLength={2}
                     maxLength={30}
                     value={email}
                     onChange={e => emailHandler(e)}/>
            </div>
            {(emailDirty && errorMessageEmail) && <div className="register__error">{errorMessageEmail}</div>}
            <div>
              <label className="register__password" >Пароль</label>
              <input className="register__input" type="password"
                     name="password"
                     placeholder="Введите Ваш Пароль"
                     minLength={4}
                     maxLength={8}
                     required={true}
                     value={password}
                     onChange={e => passwordHandler(e)}/>
            </div>
            {(passwordDirty && errorMessagePassword) && <div className="register__error">{errorMessagePassword}</div>}
          </div>
          <div className="register__button-container">
            <button className="register__button" type="submit" disabled={!inputValid}>Зарегистрироваться</button>
            <Link className="register__link" to="/signin">
              Уже зарегистрированы?
              <span className="register__login">Войти</span>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
