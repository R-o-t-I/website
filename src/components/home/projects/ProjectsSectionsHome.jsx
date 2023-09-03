import React, { useState } from "react";
import Title from "../../general/typography/title/Title.tsx";
import Button from "../../general/button/Button.tsx";
import { NavLink } from "react-router-dom";
import style from "./ProjectsSectionsHome.module.scss";

//Иконки
import {
  TbDeviceDesktop,
  TbApps,
  TbRobot,
  TbDeviceGamepad2,
  TbMasksTheater,
  TbStars,
} from "react-icons/tb";

const tabs = [
  {
    title: "Все проекты",
    selected: "all",
  },
  {
    title: "Сайты",
    selected: "site",
  },
  {
    title: "Приложения",
  },
  {
    title: "Чат-боты",
  },
  {
    title: "Веб-игры",
  },
  {
    title: "Маски",
  },
  {
    title: "Прочее",
  },
];

const projects = [
  {
    id: "",
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
  },
  {
    id: "",
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
  },
  {
    id: "",
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
  },
  {
    id: "",
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
  },
];

const ProjectsSectionsHome = () => {
  const [selected, setSelected] = React.useState("all");

  return (
    <div className={style.content}>
      <Title
        after={
          <NavLink to="/projects">
            <Button mode="outline">показать все</Button>
          </NavLink>
        }
      >
        Наши творения
      </Title>
      <div className={style.tabsContainer}>
        {tabs.map((item) => (
          <div
            selected={selected === `${item.selected}`}
            onClick={() => setSelected(item.selected)}
            className={({ isActive }) =>
              isActive ? style.tabsItem : `${style.tabsItem} ${style.active}`
            }
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={style.projectsList}>
        {projects.map((item, index) => (
          <NavLink to={`/project/${index}`} className={style.projectItem}>
            <div className={style.typeContainer}>
              <div className={style.iconContainer}>
                {item.type === "Сайт" && <TbDeviceDesktop size={20} />}
                {item.type === "Приложение" && <TbApps size={20} />}
                {item.type === "Чат-бот" && <TbRobot size={20} />}
                {item.type === "Игра" && <TbDeviceGamepad2 size={20} />}
                {item.type === "Маска" && <TbMasksTheater size={20} />}
                {item.type === "Другое" && <TbStars size={20} />}
              </div>
              <div className={style.type}>{item.type}</div>
            </div>
            <div className={style.coverContainer}>
              <img src={item.cover} className={style.cover} />
            </div>
            <div className={style.infoItemContainer}>
              <div className={style.logoContainer}>
                <img src={item.logo} className={style.logo} />
              </div>
              <div className={style.infoContainer}>
                <div className={style.titleProject}>{item.title}</div>
                <div className={style.description}>{item.description}</div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSectionsHome;
