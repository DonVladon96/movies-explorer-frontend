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
      <ul className="movie">
        <li className="movie__container">

          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic1} alt="картина 33 слова о дизайне"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">33 слова о дизайне</li>

          <li>
            <button className="movie__like-active"></button>
          </li>
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">

          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic2} alt="картина Киноальманах «100 лет дизайна»"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Киноальманах «100 лет дизайна»</li>

          <li>
            <button className="movie__like"></button>
          </li>
        </li>

        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <li>
            <ul className='movie__list-style'>
              <li>
                <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                  <img className="movie__poster" src={pic3} alt="картина В погоне за Бенкси"/>
                </Link>
              </li>
            </ul>
          </li>

          <li className="movie__caption-title">В погоне за Бенкси</li>

          <li>
            <button className="movie__like"></button>
          </li>
        </li>
        <p className="movie__time-line">1ч 47м</p>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic4} alt="картина Баския: Взрыв реальности"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Баския: Взрыв реальности</li>
          <li>
            <button className="movie__like"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic5} alt="картина Бег это свобода"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Бег это свобода</li>
          <li>
            <button className="movie__like"></button>
          </li>

        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic6} alt="Картина Книготворцы"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Книготорговцы</li>
          <li>
            <button className="movie__like-active"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic7} alt="Картина Когда я думаю о Гераминии ночью"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Когда я думаю о Германии ночью</li>
          <li>
            <button className="movie__like"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic8} alt="Картина Gimme Danger"/>
              </Link>
            </li>
          </ul>
          <li className="movie__caption-title">Gimme Danger: История Игги и The Stooge...</li>
          <li>
            <button className="movie__like"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic9} alt="Картина Дженис"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Дженис: Маленькая девочка грустит</li>
          <li>
            <button className="movie__like-active"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic10} alt="Картина Соберись перед прыжком"/>
              </Link>
            </li>
          </ul>

          <li className="movie__caption-title">Соберись перед прыжком</li>
          <li>
            <button className="movie__like-active"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'></ul>
          <li>
            <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
              <img className="movie__poster" src={pic11} alt="Картина Пи Джей Харви"/>
            </Link>
          </li>

          <li className="movie__caption-title">Пи Джей Харви: A dog called money</li>
          <li>
            <button className="movie__like"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>

      <ul className="movie">
        <li className="movie__container">
          <ul className='movie__list-style'>
            <li>
              <Link to={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} target={"_blank"}>
                <img className="movie__poster" src={pic12} alt="Картина По волнам"/>
              </Link>
            </li>
          </ul>
          <li className="movie__caption-title">По волнам: Искусство звука в кино</li>
          <li>
            <button className="movie__like"></button>
          </li>
        </li>
        <li className="movie__time-line">1ч 47м</li>
      </ul>
    </section>
  );
}

export default MoviesCardList;
