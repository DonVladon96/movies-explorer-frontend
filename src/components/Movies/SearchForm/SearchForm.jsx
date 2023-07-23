import React, {useEffect, useState} from "react";
import "./SearchForm.css"
import "../../FilterCheckbox/FilterCheckbox.css"

function SearchForm(props) {

  const [filmDirty, setFilmDirty] = useState(false)
  const [errorMessageFilm, setErrorMessageFilm] = useState('Поиск фильма')
  const {searchText, searchHandler, findeMovies, switchHandler, switchCheked, nameLocal} = props;

  useEffect(() => {
    if (filmDirty && searchText.length) {
      setFilmDirty(false)
    }
  }, [searchText, filmDirty])


  return (
    <section className="searchform">
      <form noValidate onSubmit={(e) => {
        e.preventDefault()
      }} className="searchform__container">
        <div className="searchform__find">
          <input className="searchform__input"
                 type="text"
                 name="text"
                 required
                 onChange={(event) => {
                   searchHandler(event.target.value, nameLocal)
                 }}
                 value={searchText}
                 onClick={e => setFilmDirty(true)}
                 placeholder="Фильмы"
          />
          <button type="button" onClick={() => findeMovies(searchText)} className="searchform__button"></button>
        </div>
        {(filmDirty && errorMessageFilm) && <div className="error">{errorMessageFilm}</div>}
        <label htmlFor='checkbox' className='searchform-checkbox'>
          <input className='searchform-checkbox__input' checked={switchCheked} onChange={(event)=>switchHandler(event.target.checked)} type='checkbox' id='checkbox' />
          <span className='searchform-checkbox__span' />
          Короткометражки
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
