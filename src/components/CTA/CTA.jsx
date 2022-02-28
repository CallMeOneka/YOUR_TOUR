import React from "react";
import style from "./CTA.module.scss";

import photo from "./../../assets/footer photo.jpg";

const CTA = () => {
  return (
    <div className={style.container}>
      <img src={photo} alt='' />
      <div className={style.ctaText}>
        <h3 className={style.title}>Пора в путешествие вместе с нами!</h3>
        <p className={style.text}>
          Напиши на почту и узнай подробности <br /> на{" "}
          <b> yourtour@gmail.com</b>
        </p>
      </div>
    </div>
  );
};

export default CTA;
