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
import TabsItem from "../../general/tabs/TabsItem";

const tabs = [
  {
    title: "Все проекты",
    name: "all",
  },
  {
    title: "Сайты",
    name: "sites",
  },
  {
    title: "Приложения",
    name: "apps",
  },
  {
    title: "Чат-боты",
    name: "bots",
  },
  {
    title: "Веб-игры",
    name: "games",
  },
  {
    title: "Маски",
    name: "masks",
  },
  {
    title: "Прочее",
    name: "other",
  },
];

const projects = [
  {
    id: 0,
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
    category: "games",
  },
  {
    id: 1,
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
    category: "games",
  },
  {
    id: 2,
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
    category: "games",
  },
  {
    id: 3,
    link: "",
    type: "Игра",
    cover:
      "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
    logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
    title: "Вакцина",
    description:
      "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
    category: "games",
  },
];

const ProjectsSectionsHome = () => {
  const [selected, setSelected] = React.useState("all");

  function getSelectedProjects() {
    if (selected === "all") return projects;

    return projects.filter((p) => p.category === selected);
  }

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
        {tabs.map((item, index) => (
          <TabsItem
            key={index}
            selected={selected === item.name}
            onClick={() => setSelected(item.name)}
          >
            {item.title}
          </TabsItem>
        ))}
      </div>
      <div className={style.projectsList}>
        {getSelectedProjects().map((item) => (
          <NavLink
            key={item.id}
            to={`/project/${item.id}`}
            className={style.projectItem}
          >
            <div className={style.typeContainer}>
              <div className={style.iconContainer}>
                {item.category === "sites" && <TbDeviceDesktop size={20} />}
                {item.category === "apps" && <TbApps size={20} />}
                {item.category === "bots" && <TbRobot size={20} />}
                {item.category === "games" && <TbDeviceGamepad2 size={20} />}
                {item.category === "masks" && <TbMasksTheater size={20} />}
                {item.category === "other" && <TbStars size={20} />}
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
