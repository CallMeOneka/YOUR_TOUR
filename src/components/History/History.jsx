import React from "react";
import arrow from "./../../assets/arrow.svg";

import style from "./History.module.scss";

const History = () => {
  return (
    <div className={style.history}>
      <h2>Истории путешествий</h2>
      <p className={style.text}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>

      <div className={style.cardGroup}>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Автостопом в Стамбул</h3>

          <div className={style.cardBody}>
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений:
            </p>
            <ul>
              <li>вкусная еда</li>
              <li>дешевый транспорт</li>
              <li>красивый город.</li>
            </ul>
          </div>

          <div className={style.cardFooter}>
            <div className={style.cardLink}>
              <p>Подробнее</p>
              <img src={arrow} alt='' />
            </div>
            <div className={style.society}>
              <a href=''>instagram</a>
              <a href=''>facebook</a>
              <a href=''>YouTube</a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Автостопом в Стамбул</h3>
          <div className={style.cardBody}>
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
          </div>

          <div className={style.cardFooter}>
            <div className={style.cardLink}>
              <p>Подробнее</p>
              <img src={arrow} alt='' />
            </div>
            <div className={style.society}>
              <a href=''>instagram</a>
              <a href=''>ВКонтакте</a>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <h3 className={style.cardTitle}>Автостопом в Стамбул</h3>
          <div className={style.cardBody}>
            <p>
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений.
            </p>
          </div>

          <div className={style.cardFooter}>
            <div className={style.cardLink}>
              <p>Подробнее</p>
              <img src={arrow} alt='' />
            </div>
            <div className={style.society}>
              <a href=''>instagram</a>
              <a href=''>facebook</a>
              <a href=''>ВКонтакте</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
