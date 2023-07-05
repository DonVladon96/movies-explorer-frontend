import React from "react";
import "./SearchForm.css"

function SearchForm() {


  return (
    <div className="searchform">
      <form className="searchform__container">
        <div className="searchform__find">
          <input type="text" className="searchform__input" placeholder="Фильмы"/>
          <button className="searchform__button"></button>
        </div>
        <fieldset className="searchform__switch">
          <label className="searchform__switch-container">
            <input className="searchform__switch-input" type="checkbox"/>
            <div className="searchform__switch-tumbler"></div>
            <p className="searchform__short-films">Короткометражки</p>
          </label>
        </fieldset>

      </form>
    </div>
  );
}

export default SearchForm;
