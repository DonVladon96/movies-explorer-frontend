import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/pic__COLOR_pic.png";


function AboutMe() {
  return (
    <section className="aboutme" id='student'>
      <div className="aboutme__container">
        <h2 className="aboutme__title">Студент</h2>
        <div className='aboutme__wrapper'>
          <div className="aboutme__info">
            <h3 className="aboutme__name">Виталий</h3>
            <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__biography">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики
              СГУ. У&nbsp;меня есть жена
              и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С 2015
              года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке,
              начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
            </p>
            <a className="aboutme__github" href="https://github.com/DonVladon96" target="_blank"
               rel="noreferrer">GitHub</a>
          </div>
          <img className="aboutme__avatar" src={Avatar} alt="Фото Виталия"></img>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
