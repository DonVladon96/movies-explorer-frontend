import React from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import pic1 from "../../images/pic__COLOR_pic.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/png3.png";
import HeaderLogedin from "../HeaderLogedin/HeaderLogedin";
import {Link} from "react-router-dom";

function SavedMovies() {

  return (
    <>
      <HeaderLogedin/>
      <main className="main__container">
        <SearchForm/>

        <section className="saveMovieCardList">
          <ul className="saveMovieCardList__container">
            <div className="saveMovie">
              <figure className="saveMovie__container">
                <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                  <img className="movie__poster-saved" src={pic1} alt="Сохраненный Фильм"/>
                </Link>
                <figcaption className="saveMovie__caption">33 слова о дизайне</figcaption>
                <div className="saveMovie__like-container">
                  <button type={"button"} className="saveMovie__like"></button>
                  <button type={"button"} className="saveMovie__like_activee"></button>
                </div>
              </figure>
              <p className="saveMovie__time-line">1ч 47м</p>
            </div>

            <div className="saveMovie">
              <figure className="saveMovie__container">
                <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                  <img className="movie__poster-saved" src={pic2} alt="Сохраненный Фильм"/>
                </Link>
                <figcaption className="saveMovie__caption">Киноальманах «100 лет дизайна»</figcaption>
                <div className="saveMovie__like-container">
                  <button type={"button"} className="saveMovie__like_active"></button>
                </div>
              </figure>
              <p className="saveMovie__time-line">1ч 3м</p>
            </div>

            <div className="saveMovie">
              <figure className="saveMovie__container">
                <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                  <img className="movie__poster-saved" src={pic3} alt="Сохраненный Фильм"/>
                </Link>
                <figcaption className="saveMovie__caption">В погоне за Бенкси</figcaption>
                <div className="saveMovie__like-container">
                  <button type={"button"} className="saveMovie__like"></button>
                </div>
              </figure>
              <p className="saveMovie__time-line">1ч 42м</p>
            </div>
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  )

}

export default SavedMovies;
