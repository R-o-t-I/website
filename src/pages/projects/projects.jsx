import Title from "../../components/general/typography/title/Title.tsx";

import style from "./projects.module.scss";

const Projects = () => {
  return (
    <div className={style.contentContainer}>
      <div>
        <Title>Проекты</Title>
      </div>
    </div>
  );
};

export default Projects;
