import { NavLink } from "react-router-dom";
import style from "./FooterMenu.module.scss";

const menu = [
  {
    title: "Главная",
    link: "/",
  },
  {
    title: "О нас",
    link: "/about",
  },
  {
    title: "Проекты",
    link: "/projects",
  },
  {
    title: "Команда",
    link: "/team",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
];

const FooterMenu = () => {
  return (
    <div className={style.content}>
      <div className={style.header}>Меню</div>
      <ul className={style.listMenu}>
        {menu.map((item, index) => (
          <li key={index}>
            <NavLink className={style.title} to={item.link}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
