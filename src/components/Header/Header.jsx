import React, { useCallback, useEffect, useState } from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.svg";

import blackLogo from "./../../assets/blacklogo.svg";

const Header = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);
  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <header className={style.headerImage}>
      <div className={scroll > 450 ? style.fixed : ""}>
        <div className={style.header}>
          <img src={blackLogo} className={style.blackLogo} alt='blacklogo' />
          <img src={Logo} className={style.logo} alt='logo' />
          <nav className={style.navbar}>
            <Link className={style.link}>Туры</Link>
            <Link className={style.link}>Создать тур</Link>
            <Link className={style.link}>Отзывы</Link>
            <Link className={style.link}>Истории</Link>
          </nav>
          <p className={style.headerPhone}>+7 999 999 99 99</p>
        </div>
      </div>

      <div className={style.headerTitleContainer}>
        <h1 className={style.headerTitle}>Идеальные путешествия существуют</h1>
        <p className={style.headerText}>
          Идейные соображения высшего порядка, а также рамки и место обучения
          кадров
        </p>
        <button className={style.headerButton}>Найти тур</button>
      </div>
    </header>
  );
};

export default Header;
