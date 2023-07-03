import React, { useState, useEffect } from "react";
import "./SearchForm.css"

function SearchForm(props) {
  const [filmDirty, setFilmDirty] = useState(false)
  const [errorMessageFilm, setErrorMessageFilm] = useState('Введите название фильма')
  const {searchText, searchHandler, findeMovies, switchHandler, switchCheked, nameLocal} = props;

  useEffect(() => {
    if(filmDirty && searchText.length){
      setFilmDirty(false)
    }
  }, [searchText, filmDirty])

  return (
    <form noValidate className="searchform" onSubmit={(e)=>{e.preventDefault()}}>
      <div className="searchform__block">
        <div className="searchform__input-logo"></div>
        <input/>
        <button className="searchform__button"></button>
      </div>
     <div className="error"></div>}
      <label className="searchform__switch">
        <input className="searchform__checkbox-input"/>
        <div className="searchform__checkbox-custom"></div>
        <p className="searchform__shorts">Короткометражки</p>
      </label>
    </form>
  );
}

export default SearchForm;
