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

const Project = () => {
  const { id } = useParams();
  const project = useProjectById(parseInt(id));

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
                <TbDeviceDesktop size={28} /> Сайт
              </div>
            )}
            {project?.category === "apps" && (
              <div className={style.categoryContainer}>
                <TbApps size={28} /> Приложение
              </div>
            )}
            {project?.category === "bots" && (
              <div className={style.categoryContainer}>
                <TbRobot size={28} /> Чат-бот
              </div>
            )}
            {project?.category === "games" && (
              <div className={style.categoryContainer}>
                <TbDeviceGamepad2 size={28} /> Веб-игра
              </div>
            )}
            {project?.category === "masks" && (
              <div className={style.categoryContainer}>
                <TbMasksTheater size={28} /> Маска
              </div>
            )}
            {project?.category === "other" && (
              <div className={style.categoryContainer}>
                <TbStars size={28} /> Прочее
              </div>
            )}
          </div>
          <div className={style.descriptions}>{project?.description}</div>
          <div>История идеи</div>
          <div className={style.stackContainer}>Стек: </div>
        </div>

        <div className={style.infoContainer}>
          <div className={style.logoContainer}>
            <img className={style.logo} src={project?.logo} />
          </div>
          <div>
            <div className={style.platformText}>Доступно в:</div>
            <div className={style.platformList}></div>
          </div>
        </div>
      </div>
      <Gallery>
        <img
          src={
            "https://i.pinimg.com/originals/82/be/7e/82be7ee12d79e1c80b87541e49343cea.jpg"
          }
        />
        <img
          src={
            "https://i.pinimg.com/originals/82/be/7e/82be7ee12d79e1c80b87541e49343cea.jpg"
          }
        />
        <img
          src={
            "https://i.pinimg.com/originals/82/be/7e/82be7ee12d79e1c80b87541e49343cea.jpg"
          }
        />
      </Gallery>
    </div>
  );
};

export default Project;
