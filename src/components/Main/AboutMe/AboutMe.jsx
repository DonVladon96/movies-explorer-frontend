import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/Barik.jpg";


function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__container">
        <h2 className="aboutme__title">Студент</h2>
        <div className='aboutme__wrapper'>
          <div className="aboutme__info">
            <h3 className="aboutme__name">Барик</h3>
            <p className="aboutme__job">Фронтенд разработчик, 27 лет (1 год человека = 7 годам кота)</p>
            <p className="aboutme__biography">Привет! Меня зовут Барик, я&nbsp;родился в&nbsp;городе Ижевск
              в&nbsp;2019&nbsp;году. Я&nbsp;домашний питомец замечательного человека, который разрабатывал этот
              сайт. Меня очень любят. Кушаю я&nbsp;исключительно Royal Canin. Совсем c недавних пор я&nbsp;начал кодить,
              чтобы самостоятельно зарабатывать себе на&nbsp;Royal Canin. После того как я&nbsp;прошел курс
              по&nbsp;веб-разработке начал заниматься фриланс заказами и&nbsp;ушел c постоянной кошачей работы.
            </p>
            <a className="aboutme__github" href="https://github.com/DonVladon96" target="_blank"
               rel="noreferrer">GitHub</a>
          </div>
          <img className="aboutme__avatar" src={Avatar} alt="Барик"></img>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
