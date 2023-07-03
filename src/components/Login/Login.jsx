import "./Login.css";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg"
function Login() {

  return(
    <section className="login">
      <div className="login__container">
        <div className="login__logo-container">
          <Link to="/">
            <img src={logo} alt="Логотип" className="login__logo" />
          </Link>
        </div>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" >
          <fieldset className="login__inputs-container">
            <label>
              <span className="login__email">E-mail</span>
              <input className="login__input"/>

            </label>
            <label>
              <span className="login__password">Пароль</span>
              <input className="login__input"/>
            </label>
          </fieldset>
          <div className="login__button-container">
            <button className="login__button" type="submit" >Войти</button>
            <Link className="login__link" to="/signup">
              Ещё не зарегистрированы?
              <span className="login__register">Регистрация</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
