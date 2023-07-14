import {Link, NavLink} from 'react-router-dom';
import './Navigation.css';
import React from "react";

function Navigation({ isOpenBurger }) {
  return(
    <div className={`navigation ${isOpenBurger ? 'navigation_active' : ''}`}>
      <Link to='/' className='navigation__link navigation__link_home'>
        Главная
      </Link>
      <ul className='navigation__list'>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "navigation__link"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink to='/saved-movies' className='navigation__link'>
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
      <Link to="/profile" className="navigation__profile">
        Аккаунт
      </Link>
    </div>
  )
}

export default Navigation;
