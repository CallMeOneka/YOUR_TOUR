import React from "react";

import vkLogo from "./../../assets/society/vkontakte.png";
import instLogo from "./../../assets/society/instagram.png";
import fbLogo from "./../../assets/society/facebook.png";

import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <p className={style.text}>Наши социальные сети</p>

        <div className={style.society}>
          <img className={style.image} src={instLogo} alt='' />
          <a className={style.link} href=''>
            instagram
          </a>
          <img className={style.image} src={fbLogo} alt='' />
          <a className={style.link} href=''>
            facebook
          </a>
          <img className={style.image} src={vkLogo} alt='' />
          <a className={style.link} href=''>
            vkontakte
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
