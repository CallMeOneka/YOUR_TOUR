import React from "react";

import travel1 from "./../../assets/gallery/travel photo-1.jpg";
import travel2 from "./../../assets/gallery/travel photo-2.jpg";
import travel3 from "./../../assets/gallery/travel photo-3.jpg";
import travel4 from "./../../assets/gallery/travel photo-4.jpg";
import travel5 from "./../../assets/gallery/travel photo-5.jpg";
import travel6 from "./../../assets/gallery/travel photo-6.jpg";
import travel7 from "./../../assets/gallery/travel photo-7.jpg";
import travel8 from "./../../assets/gallery/travel photo-8.jpg";
import travel9 from "./../../assets/gallery/travel photo-9.jpg";
import travel10 from "./../../assets/gallery/travel photo-10.jpg";
import travel11 from "./../../assets/gallery/travel photo-11.jpg";
import travel12 from "./../../assets/gallery/travel photo-12.jpg";
import travel13 from "./../../assets/gallery/travel photo-13.jpg";

import style from "./Photo.module.scss";

const Photo = () => {
  return (
    <div className={style.photo}>
      <h2 className={style.title}>Фотографии путешествий</h2>
      <p className={style.text}>
        Идейные соображения высшего порядка, а также рамки и место обучения
        кадров
      </p>

      <div className={style.gallery}>
        <div className={style.row}>
          <div className={style.galleryItem}>
            <img src={travel1} alt='' />
          </div>
          <div className={`${style.galleryItem} ${style.desktopL}`}>
            <img src={travel2} alt='' />
          </div>
          <div className={`${style.galleryItem} ${style.mobile}`}>
            <img src={travel3} alt='' />
          </div>
          <div className={style.galleryItem}>
            <img src={travel4} alt='' />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.galleryItem}>
            <img src={travel5} alt='' />
          </div>
          <div className={`${style.galleryItem} ${style.mobile}`}>
            <img src={travel6} alt='' />
          </div>
          <div className={`${style.galleryItem} ${style.desktopL}`}>
            <img src={travel7} alt='' />
          </div>
          <div className={style.galleryItem}>
            <img src={travel8} alt='' />
          </div>
          <div className={style.galleryItem}>
            <img src={travel13} alt='' />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.galleryItem}>
            <img src={travel9} alt='' />
          </div>
          <div className={style.galleryItem}>
            <img src={travel10} alt='' />
          </div>
          <div className={`${style.galleryItem} ${style.mobile}`}>
            <img src={travel11} alt='' />
          </div>
          <div className={`${style.galleryItem} ${style.desktopL}`}>
            <img src={travel12} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
