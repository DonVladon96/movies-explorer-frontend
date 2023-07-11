import React from "react";
import "./MoviesCardList.css";
import pic1 from "../../../images/pic__COLOR_pic.svg"
import pic2 from "../../../images/pic2.png"
import pic3 from "../../../images/png3.png"
import pic4 from "../../../images/png4.png"
import pic5 from "../../../images/pic5.png"
import pic6 from "../../../images/pic6.png"
import pic7 from "../../../images/pic7.png"
import pic8 from "../../../images/pic8.png"
import pic9 from "../../../images/pic9.png"
import pic10 from "../../../images/pic10.png"
import pic11 from "../../../images/pic11.png"
import pic12 from "../../../images/pic12.png"


function MoviesCardList() {

  return (
    <section className="movieCardList">
      <div className="movieCardList__container">
        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic1} alt="Фильм"/>
            <figcaption className="movie__caption">33 слова о дизайне</figcaption>
            <button className="movie__like_active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic2} alt="Фильм"/>
            <figcaption className="movie__caption">Киноальманах «100 лет дизайна»</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic3} alt="Фильм"/>
            <figcaption className="movie__caption">В погоне за Бенкси</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic4} alt="Фильм"/>
            <figcaption className="movie__caption">Баския: Взрыв реальности</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic5} alt="Фильм"/>
            <figcaption className="movie__caption">Бег это свобода</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic6} alt="Фильм"/>
            <figcaption className="movie__caption">Книготорговцы</figcaption>
            <button className="movie__like_active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic7} alt="Фильм"/>
            <figcaption className="movie__caption">Когда я думаю о Германии ночью</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic8} alt="Фильм"/>
            <figcaption className="movie__caption">Gimme Danger: История Игги и The Stooge...</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic9} alt="Фильм"/>
            <figcaption className="movie__caption">Дженис: Маленькая девочка грустит</figcaption>
            <button className="movie__like_active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic10} alt="Фильм"/>
            <figcaption className="movie__caption">Соберись перед прыжком</figcaption>
            <button className="movie__like_active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic11} alt="Фильм"/>
            <figcaption className="movie__caption">Пи Джей Харви: A dog called money</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>

        <div className="movie">
          <figure className="movie__container">
            <img className="movie__poster" src={pic12} alt="Фильм"/>
            <figcaption className="movie__caption">По волнам: Искусство звука в кино</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
