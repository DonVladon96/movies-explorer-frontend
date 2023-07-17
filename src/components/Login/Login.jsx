import "./Login.css";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg"
import {useEffect, useState} from "react";


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [errorMessageEmail, setErrorMessageEmail] = useState('Введите email')
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [errorMessagePassword, setErrorMessagePassword] = useState('Введите пароль')
  const [inputValid, setInputValid] = useState(false)


  const emailHandler = (event) => {
    blurHandler(event)
    setEmail(event.target.value)
    const pattern = /^\w+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pattern.test(String(event.target.value).toLocaleLowerCase())) {
      setErrorMessageEmail("Неккоректный email")
    } else {
      setErrorMessageEmail("")
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
    if (errorMessageEmail || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorMessageEmail, errorMessagePassword])

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
                     value={email}
                     onChange={event => emailHandler(event)}/>
              {(emailDirty && errorMessageEmail) && <div className="login__error">{errorMessageEmail}</div>}
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
                     value={password}
                     onChange={event => passwordHandler(event)}
              />
              {(passwordDirty && errorMessagePassword) && <div className="login__error">{errorMessagePassword}</div>}
            </div>
          </div>
          <div className="login__button-container">
            <button className="login__button" type="button" disabled={!inputValid}>Войти</button>
            <Link className="login__link" to="/signup">
              Ещё не зарегистрированы?
              <span className="login__register">Регистрация</span>
            </Link>
          </div>
        </form>
      </section>
    </main>);
}

export default Login;
