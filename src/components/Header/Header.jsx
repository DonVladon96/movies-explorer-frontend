import './Header.css';
import {Link, useNavigate} from "react-router-dom";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {useContext} from "react";
import {CurrentUserContext} from "../App/App";


function Header() {

  const { logedId } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('/signin')
  }

  const handleSignupClick = () => {
    navigate('/signup')
  }

  return (<>
    {logedId && <HeaderLogedin />}

    {!logedId && (
    <header className='header'>
      <nav className='header__container'>
        <Link className='header__logo anim-logo' to={'/'}></Link>

        <div className='header__button-container'>
          <button className="header__button-signup" type='button' onClick={handleSignupClick}>Регистрация</button>
          <button className={`header__button-signing header__button-green`} type='button' onClick={handleSigninClick}>Войти</button>
        </div>
      </nav>
    </header>
    )}
  </>);
}

export default Header;
