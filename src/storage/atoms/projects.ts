import { atom } from "recoil";
import IProject from "../../models/project";

interface IProjectsState {
  projects?: IProject[];
}

const projectsState = atom<IProjectsState>({
  key: "projectsState",
  default: {
    projects: undefined,
  },
});

export default projectsState;
