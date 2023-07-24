import React from "react";
import "./MoviesCardList.css";
import {SHORTS_MOVIES_40MIN} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList  ({cards, switchCheked, counterCard, setDurationLength, saveMoviesCards, deliteFilm, isSearch}) {

  let films = cards;
  if(switchCheked){
    films =  cards.filter(film => film.duration < SHORTS_MOVIES_40MIN)
    setDurationLength(films.length)
  }
  films = films.filter((a, index)=> index < counterCard)


  return (
    <section className="movieCardList">
      {films.length ? films.map((card) => (
        <MoviesCard key={card.id} card={card} saveMoviesCards={saveMoviesCards} deliteFilm={deliteFilm} />
      )) : isSearch ? <>Ничего не найдено!</>: ''}
    </section>
  );
}

export default MoviesCardList;
