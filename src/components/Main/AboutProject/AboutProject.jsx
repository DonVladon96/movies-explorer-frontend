import React from "react";
import './AboutProject.css';

function AboutProject() {

  return (
    <section className='about-project' id='about'>
      <div className='about-project__container'>
        <h2 className="about-project__title">О проекте</h2>
        <div className="diplom">
          <div className="diplom-container">
            <h3 className="diplom-container__title">Дипломный проект включал 5 этапов</h3>
            <p className="diplom-container__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="diplom-container">
            <h3 className="diplom-container__title">На выполнение диплома ушло 5 недель</h3>
            <p className="diplom-container__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="diplom-processing">
          <div className="diplom-processing__backend">
            <p className="diplom-processing__time diplom-processing__time_week">1 неделя</p>
            <p className="diplom-processing__title">Back-end</p>
          </div>
          <div className="diplom-processing__frontend">
            <p className="diplom-processing__time diplom-processing__time_weeks">4 недели</p>
            <p className="diplom-processing__title">Front-end</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutProject;
