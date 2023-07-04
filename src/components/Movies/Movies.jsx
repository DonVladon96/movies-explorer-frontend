import React from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";

function Movies() {

  return (
    <>
      <HeaderLogedin/>
      <main className="main__container">
        <SearchForm/>
        <MoviesCardList/>
        )}
        <button className="movies__button">
          Еще
        </button>
      </main>
      <Footer/>
    </>
  );
}

export default Movies;
