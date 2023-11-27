import React from "react";
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
import Tabs from "../../general/tabs/Tabs";
import useProjects from "../../../hooks/useProjects";

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

const ProjectsSectionsHome = () => {
  const [selected, setSelected] = React.useState("all");
  const [projects] = useProjects();

  function getSelectedProjects() {
    if (!projects) return;
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
        {getSelectedProjects()?.map((item) => (
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
        {getSelectedProjects()?.length === 0 && (
          <div>Пожалуйста, подождите. Загружаем проекты...</div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSectionsHome;
