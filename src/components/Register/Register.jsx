import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Register() {

  return(
    <section className="register">
      <div className="register__container">
        <div className="register__logo-container">
          <Link to="/">
            <img src={logo} alt="Логотип" className="register__logo" />
          </Link>
        </div>
        <h2 className="register__title">Доброе пожаловать!</h2>
        <form className="register__form">
          <fieldset className="register__inputs-container">
            <label>
              <span className="register__name">Имя</span>
              <input className="register__input"/>
            </label>
            <label>
              <span className="register__email">E-mail</span>
              <input className="register__input"/>
            </label>
            <label>
              <label className="register__password">Пароль</label>
              <input className="register__input"/>
            </label>
          </fieldset>
          <div className="register__button-container">
            <button className="register__button" type="submit">Зарегистрироваться</button>
            <Link className="register__link" to="/signin">
              Ещё не зарегистрированы?
              <span className="register__login">Войти</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
