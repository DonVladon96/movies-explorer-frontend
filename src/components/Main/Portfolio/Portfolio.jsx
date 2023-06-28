import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className='portfolio__container'>
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="potfolio__list">

          <li className="portfolio__work">
            <a
              className="porfolio__link"
              href="https://donvladon96.github.io/how-to-learnPablic/"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <p className="portfolio__link-icon"></p>
            </a>
          </li>

          <li className="portfolio__work">
            <a
              className="porfolio__link"
              href="https://donvladon96.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <p className="portfolio__link-icon"></p>
            </a>
          </li>

          <li className="portfolio__work">
            <a
              className="porfolio__link"
              href="https://donvladon.nomoredomains.rocks/sign-in"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <p className="portfolio__link-icon"></p>
            </a>
          </li>

        </ul>
      </div>

    </section>
  );
}

export default Portfolio;
