import { DefaultValue, selector, useRecoilState } from "recoil";
import IProject from "../../models/project";
import projectsState from "../atoms/projects";

export const useProjectsSelector = selector<IProject[] | undefined>({
  key: "getProjectsSelector",
  get: ({ get }) => get(projectsState).projects,
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    const state = get(projectsState);
    set(projectsState, {
      ...state,
      projects: newValue,
    });
  },
});
