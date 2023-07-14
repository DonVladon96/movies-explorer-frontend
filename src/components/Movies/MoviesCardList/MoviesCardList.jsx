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
import {Link} from "react-router-dom";

function MoviesCardList() {

  return (
    <section className="movieCardList">
        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic1} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">33 слова о дизайне</figcaption>
            <button className="movie__like-active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic2} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Киноальманах «100 лет дизайна»</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic3} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">В погоне за Бенкси</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic4} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Баския: Взрыв реальности</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic5} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Бег это свобода</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic6} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Книготорговцы</figcaption>
            <button className="movie__like-active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic7} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Когда я думаю о Германии ночью</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic8} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Gimme Danger: История Игги и The Stooge...</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic9} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Дженис: Маленькая девочка грустит</figcaption>
            <button className="movie__like-active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic10} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Соберись перед прыжком</figcaption>
            <button className="movie__like-active"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic11} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">Пи Джей Харви: A dog called money</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>

        <article className="movie">
          <figure className="movie__container">
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic12} alt="Сохраненный Фильм"/>
            </Link>
            <figcaption className="movie__caption-title">По волнам: Искусство звука в кино</figcaption>
            <button className="movie__like"></button>
          </figure>
          <p className="movie__time-line">1ч 47м</p>
        </article>
    </section>
  );
}

export default MoviesCardList;
