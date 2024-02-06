import React from "react";
import style from "./project.module.scss";
import { NavLink, useParams } from "react-router-dom";
import useProjectById from "../../../hooks/useProjectById";

import Button from "../../../components/general/button/Button";

//Иконки
import {
  TbDeviceDesktop,
  TbApps,
  TbRobot,
  TbDeviceGamepad2,
  TbMasksTheater,
  TbStars,
} from "react-icons/tb";
import Gallery from "../../../components/general/gallery/Gallery";
import Tabs from "../../../components/general/tabs/Tabs";
import TabsItem from "../../../components/general/tabs/TabsItem";

const Project = () => {
  const { id } = useParams();
  const project = useProjectById(parseInt(id));
  const [activeTab, setActiveTab] = React.useState("Android");

  function changeTab(e) {
    setActiveTab(e.currentTarget.dataset.device || "Android");
  }

  return (
    <div className={style.container}>
      <div className={style.navContainer}>
        <NavLink to="/projects" className={style.navItem}>
          Проекты
        </NavLink>
        <div className={style.navSeparator}>→</div>
        <div className={style.navItemActive}>
          {project?.title || "Ничего не найдено"}
        </div>
      </div>
      <div className={style.projectContainer}>
        <div className={style.infoContainer}>
          <div className={style.title}>{project?.title}</div>
          <div>
            {project?.category === "sites" && (
              <div className={style.categoryContainer}>
                <TbDeviceDesktop className={style.categoryIcon} size={28} />
                Сайт
              </div>
            )}
            {project?.category === "apps" && (
              <div className={style.categoryContainer}>
                <TbApps className={style.categoryIcon} size={28} />
                Приложение
              </div>
            )}
            {project?.category === "bots" && (
              <div className={style.categoryContainer}>
                <TbRobot className={style.categoryIcon} size={28} />
                Чат-бот
              </div>
            )}
            {project?.category === "games" && (
              <div className={style.categoryContainer}>
                <TbDeviceGamepad2 className={style.categoryIcon} size={28} />
                Веб-игра
              </div>
            )}
            {project?.category === "masks" && (
              <div className={style.categoryContainer}>
                <TbMasksTheater className={style.categoryIcon} size={28} />
                Маска
              </div>
            )}
            {project?.category === "other" && (
              <div className={style.categoryContainer}>
                <TbStars className={style.categoryIcon} size={28} />
                Прочее
              </div>
            )}
          </div>
          <div className={style.infoItemContauner}>
            <div className={style.titleInfo}>Описание:</div>
            <div className={style.descriptions}>{project?.description}</div>
          </div>
          <div className={style.infoItemContauner}>
            <div className={style.titleInfo}>История идеи:</div>
            <div className={style.descriptions}>{project?.story}</div>
          </div>
          <div className={style.infoItemContauner}>
            <div className={style.titleInfo}>Стек:</div>
            <div className={style.descriptions}></div>
          </div>
        </div>

        <div className={style.infoContainer}>
          <div className={style.logoContainer}>
            <img className={style.logo} src={project?.photo} />
          </div>
          <div>
            <div className={style.platformText}>Доступно в:</div>
            <div className={style.platformList}></div>
          </div>
        </div>
      </div>

      <Tabs>
        <TabsItem
          selected={activeTab === "Android"}
          data-device={"Android"}
          onClick={changeTab}
        >
          Android
        </TabsItem>
        <TabsItem
          selected={activeTab === "Ios"}
          data-device={"Ios"}
          onClick={changeTab}
        >
          IOS
        </TabsItem>
        <TabsItem
          selected={activeTab === "Desktop"}
          data-device={"Desktop"}
          onClick={changeTab}
        >
          Desktop
        </TabsItem>
      </Tabs>

      <Gallery>
        {project &&
          project["screenshots" + activeTab]
            .split(",")
            .map((i, index) => <img key={index} src={i} />)}
      </Gallery>
    </div>
  );
};

export default Project;
