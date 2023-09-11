import useProjects from "./useProjects";
import IProject from "../models/project";

function useProjectById(id: number): IProject | undefined {
  const [projects] = useProjects();

  if (projects instanceof Array)
    for (let project of projects) {
      if (project.id === id) {
        return project;
      }
    }
}

export default useProjectById;
