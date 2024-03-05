import React, { useEffect } from "react";
import Title from "../../general/typography/title/Title.tsx";
import Button from "../../general/button/Button.tsx";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
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
import Tabs from "../../general/tabs/Tabs";
import useProjects from "../../../hooks/useProjects";
import axios from "axios";
import Snackbar from "../../general/snackbar/Snackbar";
import useSnackbar from "../../../hooks/useSnackbar";

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
    title: "Иллюстрации",
    name: "illustrations",
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

const categories = {
  sites: {
    icon: <TbDeviceDesktop size={20} />,
    ru: "Сайт",
    en: "Site",
  },
  apps: {
    icon: <TbApps size={20} />,
    ru: "Приложение",
    en: "App",
  },
  bots: {
    icon: <TbRobot size={20} />,
    ru: "Чат-бот",
    en: "Bot",
  },
  games: {
    icon: <TbDeviceGamepad2 size={20} />,
    ru: "Веб-игра",
    en: "Game",
  },
  masks: {
    icon: <TbMasksTheater size={20} />,
    ru: "Маска",
    en: "Mask",
  },
  other: {
    icon: <TbStars size={20} />,
    ru: "Другое",
    en: "Other",
  },
};

const ProjectsSectionsHome = () => {
  const [selected, setSelected] = React.useState("all");
  const [projects, setProjects] = useProjects();
  const [, setSnackbar] = useSnackbar();

  function getSelectedProjects() {
    if (!projects) return;
    if (selected === "all") return projects;

    return projects.filter((p) => p.category === selected);
  }

  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

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
      <Tabs>
        {tabs.map((item, index) => (
          <TabsItem
            key={index}
            selected={selected === item.name}
            onClick={() => setSelected(item.name)}
          >
            {item.title}
          </TabsItem>
        ))}
      </Tabs>

      <div className={style.projectsList}>
        <Slider {...settings}>
          {getSelectedProjects()?.map((item) => (
            <NavLink
              key={item.id}
              to={`/project/${item.id}`}
              className={style.projectItem}
            >
              <div className={style.typeContainer}>
                <div className={style.iconContainer}>
                  {categories[item.category].icon}
                </div>
                <div className={style.type}>{categories[item.category].ru}</div>
              </div>
              <div className={style.coverContainer}>
                <img src={item.cover} className={style.cover} />
              </div>
              <div className={style.infoItemContainer}>
                <div className={style.logoContainer}>
                  <img src={item.photo} className={style.logo} />
                </div>
                <div className={style.infoContainer}>
                  <div className={style.titleProject}>{item.title}</div>
                  <div className={style.description}>{item.description}</div>
                </div>
              </div>
            </NavLink>
          ))}
        </Slider>

        {!getSelectedProjects() && (
          <div className={style.placeholder}>
            <div className={style.loader} />
            Пожалуйста, подождите. Загружаем проекты...
          </div>
        )}

        {getSelectedProjects()?.length === 0 && (
          <div className={style.placeholder}>Ниичего не найдено</div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSectionsHome;
