import projectsState from "../storage/atoms/projects";
import { useRecoilState } from "recoil";
import IProject from "../models/project";

function useProjects() {
  const [state, setState] = useRecoilState(projectsState);

  function setProjects(projects: IProject[]) {
    setState({ ...state, projects: projects });
  }

  return [state.projects, setProjects];
}

export default useProjects;
