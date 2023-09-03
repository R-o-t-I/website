import { NavLink } from "react-router-dom";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/useLocalStorage";
import i18n from "../../language/i18n";

import style from "./Navbar.module.scss";

import ButtonTheme from "../buttonTheme/ButtonTheme";

//Иконки
import { ReactComponent as IconLogo } from "../../img/logo.svg";

const nav = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about",
    link: "/about",
  },
  {
    title: "projects",
    link: "/projects",
  },
  {
    title: "team",
    link: "/team",
  },
  {
    title: "contacts",
    link: "/contacts",
  },
];

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ru");

  const handleLenguageChange = () => {
    if (language === "en") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else if (language === "ru") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  };

  return (
    <header className={style.nav}>
      <div className={style.container}>
        <div className={style.navBody}>
          <NavLink className={style.navLogo} to="/">
            <IconLogo className={style.logo} />
            <div className={style.textLogo}>SkyReglis Studio</div>
          </NavLink>
          <div className={style.afterMenu}>
            <nav
              className={
                menuActive === false
                  ? `${style.headerMenu}`
                  : `${style.headerMenu} ${style.active}`
              }
            >
              <ul className={style.headerList}>
                {nav.map((item) => (
                  <li>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? `${style.headerLink} ${style.active}`
                          : style.headerLink
                      }
                    >
                      {t(`${item.title}`)}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={style.buttonHeader}>
              <div
                className={style.languageButton}
                onClick={handleLenguageChange}
              >
                {language === "ru" ? t("english") : t("russian")}
              </div>
              <div className={style.themeButton}>
                <ButtonTheme />
              </div>
              <div
                className={
                  menuActive === false
                    ? style.headerBurger
                    : `${style.headerBurger} ${style.active}`
                }
                onClick={() => setMenuActive(!menuActive)}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
