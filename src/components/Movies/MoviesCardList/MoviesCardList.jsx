import React from "react";
import "./MoviesCardList.css";
import {SHORTS_MOVIES_40MIN} from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList  ({cards, switchCheked, counterCard,  saveMoviesCards, deliteFilm, isSearch}) {

  const filteredMovies = () => {
    let filtered = cards;
    if (switchCheked) {
      filtered = filtered.filter(film => film.duration < SHORTS_MOVIES_40MIN);
    }
    return filtered.slice(0, counterCard);
  };

  const filteredMoviesList = filteredMovies();

  return (
    <section className="movieCardList">
      {filteredMoviesList.length? filteredMoviesList.map(card => (
        <MoviesCard key={card.id} card={card} saveMoviesCards={saveMoviesCards} deliteFilm={deliteFilm} />
      )) : isSearch? (
        <p>Ничего не найдено!</p>
      ) : (
        ''
      )}
    </section>
  );
}

export default MoviesCardList;
