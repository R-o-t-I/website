import style from "./project.module.scss";
import { useParams } from "react-router-dom";
import useProjectById from "../../../hooks/useProjectById";

const Project = () => {
  const { id } = useParams();
  const project = useProjectById(parseInt(id));

  return <div>{project.title || "Ничего не найдено"}</div>;
};

export default Project;
