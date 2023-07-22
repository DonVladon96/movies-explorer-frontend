import {Link, useLocation} from "react-router-dom";
import React, {useContext, useState} from "react";
import "./MoviesCard.css";
import {CurrentUserContext} from "../../App/App";
import {setLocalStorage} from "../../localStorage/localStorage";
import MainApi from "../../../utils/Api/MainApi";
import saveButton from "../../../images/save-button.svg";
import saveFilmButton from "../../../images/save-icone.svg"
import {DURATION_CONVERT} from "../../../utils/constants";


function MoviesCard({card, saveMoviesCards, deliteFilm}) {

  const location = useLocation();
  const [isSaved, setIsSaved] = useState(card.inSaved);
  const {setFindeSaveMoviesStore, setSaveMoviesStore, setFilms, setCards} = useContext(CurrentUserContext);


  let src = `https://api.nomoreparties.co/${card.image.url}`;

  function handleClick() {
    if (isSaved) {

      setCards(prev => prev.map(item => item.id === card.id ? {...item, inSaved: false} : item))
      setFilms(prev => prev.map(item => item.id === card.id ? {...item, inSaved: false} : item))

      setSaveMoviesStore(prev => {
        const newData = prev.filter(item => item.id !== card.id)
        setLocalStorage("SaveMoviesSearch", newData)
        return newData
      })
      setFindeSaveMoviesStore(prev => prev.filter(item => item.id !== card.id))
      MainApi.deleteSaveMovies(card._id)
    } else {

      MainApi.saveMovies(card).then(data => {

        setCards(prev => prev.map(item => {
          if (data.movieId === item.id) {
            return {...item, inSaved: true, _id: data._id}
          }
          return item
        }))

        setFilms(prev => prev.map(item => {
          if (data.movieId === item.id) {
            return {...item, inSaved: true, _id: data._id}
          }
          return item
        }))
        const saveCard = {...data, id: data.movieId, image: card.image}

        setFindeSaveMoviesStore(prev => [...prev, saveCard])
        setSaveMoviesStore(prev => [...prev, saveCard])
      });
    }
    setIsSaved(!isSaved);
  }

  const handleDelete = () => {
    setFilms(prev => prev.map(item => {
      if (item.id === card.id) {
        item.inSaved = false;
      }
      return item
    }))
    setCards(prev => prev.map(item => {
      if (item.id === card.id) {
        item.inSaved = false;
      }
      return item
    }))
    deliteFilm(card._id)
    MainApi.deleteSaveMovies(card._id)
  }

  return (
    <ul className="movie">
      <li className="movie__container">
        <Link to={card.trailerLink} target={"_blank"} rel='noreferrer'>
          <img className="movie__poster" src={src} alt={`Постер фильма ${card.nameRU}`}/>
        </Link>

        <h3 className="movie__caption-title">{card.nameRU}</h3>


        {location.pathname === "/saved-movies" &&
          <button type="button" aria-label="удалить фильм" onClick={handleDelete}
                  className="movie__like-delete"></button>}


        {location.pathname === "/movies" &&
          <button type="button" aria-label="сохранить"
                  className={isSaved ? "movie__button-save" : "movie__button"}
                  onClick={handleClick}>
            {isSaved ? <img className="moviesCard__delete" alt="добавлено" src={saveButton}/> :
              <img className="moviesCard__add" alt="добавить" src={saveFilmButton}/>}
          </button>}

      </li>

      <li className="movie__time-line">{Math.round(card.duration/DURATION_CONVERT)}ч {card.duration - DURATION_CONVERT*Math.round(card.duration/DURATION_CONVERT)}м</li>
    </ul>

  );

}

export default MoviesCard;
