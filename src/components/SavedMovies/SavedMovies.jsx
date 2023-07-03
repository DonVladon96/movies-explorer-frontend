import React, { useEffect, useState, useContext } from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";


function SavedMovies() {

  return(
    <>
      <Header/>
      <main className="main__box">
        <SearchForm />
         <MoviesCardList />}
       <button className="movies__button" >Еще</button>}
      </main>
      <Footer/>
    </>
  )

}

export default SavedMovies;
