import React from "react";
import style from "./ChooseTour.module.scss";
import arrow from "./../../assets/arrow.svg";
import { Link } from "react-router-dom";

const ChooseTour = () => {
  return (
    <section className={style.chooseTour}>
      <h2 className={style.chooseTitle}>Выбери свой тур</h2>
      <ul className={style.chooseLinks}>
        <li className={`${style.link} ${style.active}`}>Популярный</li>
        <li className={style.link}>Авторские</li>
        <li className={style.link}>Походы</li>
        <li className={style.link}>Сплавы</li>
        <li className={style.link}>Велопрогулки</li>
      </ul>
      <div className={style.chooseCardsBlock}>
        <div className={style.card} id={style.first}>
          <h3 className={style.cardTitle}>Путешествие в горы</h3>
          <p className={style.cardText}>от 80 000 руб</p>
          <Link className={style.cardLink}>
            Подробнее <img src={arrow} alt='' />
          </Link>
        </div>
        <div className={style.card} id={style.second}>
          <h3 className={style.cardTitle}>Путешествие в горы</h3>
          <p className={style.cardText}>от 80 000 руб</p>
          <Link className={style.cardLink}>
            Подробнее <img src={arrow} alt='' />
          </Link>
        </div>
        <div className={style.card} id={style.third}>
          <h3 className={style.cardTitle}>Путешествие в горы</h3>
          <p className={style.cardText}>от 80 000 руб</p>
          <Link className={style.cardLink}>
            Подробнее <img src={arrow} alt='' />
          </Link>
        </div>
        <div className={style.card} id={style.fourth}>
          <h3 className={style.cardTitle}>Путешествие в горы</h3>
          <p className={style.cardText}>от 80 000 руб</p>
          <Link className={style.cardLink}>
            Подробнее <img src={arrow} alt='' />
          </Link>
        </div>
        <div className={style.card} id={style.fifth}>
          <h3 className={style.cardTitle}>Путешествие в горы</h3>
          <p className={style.cardText}>от 80 000 руб</p>
          <Link className={style.cardLink}>
            Подробнее <img src={arrow} alt='' />
          </Link>
        </div>
        <div className={style.card} id={style.sixth}>
          <h3 className={style.cardTitle}>Путешествие в горы</h3>
          <p className={style.cardText}>от 80 000 руб</p>
          <Link className={style.cardLink}>
            Подробнее <img src={arrow} alt='' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseTour;
