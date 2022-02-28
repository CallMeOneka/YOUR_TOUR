import React from "react";

import photo1 from "./../../assets/feedback/review photo-1.jpg";
import photo2 from "./../../assets/feedback/review photo-2.jpg";

import style from "./Feedback.module.scss";

const Feedback = () => {
  return (
    <div className={style.feedback}>
      <h2 className={style.title}>
        Отзывы наших <br /> путешественников
      </h2>
      <p className={style.text}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>

      <div className={style.feedbackCards}>
        <div className={style.card}>
          <p className={style.cardText}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров обеспечивает широкому кругу (специалистов) участие в
            формировании новых предложений. Идейные соображения высшего порядка,
            а также начало повседневной работы по формированию позиции позволяет
            оценить значение модели развития.
          </p>
          <div className={style.cardFooter}>
            <div className={style.footerText}>
              <h3>Мария</h3>
              <p>Тур: Вдали от дома</p>
            </div>
            <img src={photo1} alt='' />
          </div>
        </div>
        <div className={style.card}>
          <p className={style.cardText}>
            Равным образом постоянный количественный рост и сфера нашей
            активности играет важную роль в формировании системы обучения
            кадров, соответствует насущным потребностям. <br /> <br />
            Значимость этих проблем настолько очевидна, что дальнейшее развитие
            различных форм деятельности обеспечивает широкому кругу
            (специалистов) участие в формировании новых предложений.
            Повседневная практика показывает, что реализация намеченных плановых
            заданий в значительной степени обуславливает создание модели
            развития.
          </p>
          <div className={style.cardFooter}>
            <div className={style.footerText}>
              <h3>Павел</h3>
              <p>Тур: Путешествие в горы</p>
            </div>
            <img src={photo2} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
