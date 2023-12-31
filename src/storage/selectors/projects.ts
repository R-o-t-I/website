import { DefaultValue, selector, useRecoilState } from "recoil";
import IProject from "../../models/project";
import projectsState from "../atoms/projects";

export const useProjectsSelector = selector<IProject[] | undefined>({
  key: "getProjectsSelector",
  get: () => {
    const [state, setState] = useRecoilState(projectsState);

    if (!state.projects) {
      const projects: IProject[] = [
        {
          id: 0,
          link: "",
          type: "Веб-игра",
          cover:
            "https://sun9-64.userapi.com/impf/WhcaXsVb1gP3OhkP1JS8UNuM1KnQ3G6sOpoZrg/8ozdt8IkogE.jpg?size=1074x480&quality=90&crop=0,0,1120,501&sign=9e944ed1dd713e45281c0dd2eaafcbdd",
          logo: "https://sun9-72.userapi.com/impf/cBa_G3INl043egztPUT6o5FE5wT5TI4g-TB8qw/jMu9l68B4iA.jpg?size=288x288&quality=90&sign=9d0818d14f49ae0da6006aad057ca4bc",
          title: "Вакцина",
          description:
            "Вакцина — игра-кликер, в которой тебе предстоит сражаться с вирусом, выполнять задания и занять верхушку топа!",
          category: "games",
          screenshots: {
            android: [
              "https://image.winudf.com/v2/image1/Y29tLnZrb250YWt0ZS5hbmRyb2lkX3NjcmVlbl8zXzE2MTU0MjcxODhfMDk2/screen-3.jpg?fakeurl=1",
              "https://image.winudf.com/v2/image1/Y29tLnZrb250YWt0ZS5hbmRyb2lkX3NjcmVlbl8zXzE2MTU0MjcxODhfMDk2/screen-3.jpg?fakeurl=1",
              "https://image.winudf.com/v2/image1/Y29tLnZrb250YWt0ZS5hbmRyb2lkX3NjcmVlbl8zXzE2MTU0MjcxODhfMDk2/screen-3.jpg?fakeurl=1",
            ],
            ios: [
              "https://trashbox.ru/ifiles/1094627_4d6736_6-1/kak-ustanovit-ios-13-i-kakoj-v-etom-smysl-1.jpeg",
              "https://trashbox.ru/ifiles/1094627_4d6736_6-1/kak-ustanovit-ios-13-i-kakoj-v-etom-smysl-1.jpeg",
              "https://trashbox.ru/ifiles/1094627_4d6736_6-1/kak-ustanovit-ios-13-i-kakoj-v-etom-smysl-1.jpeg",
            ],
            desktop: [
              "https://rozetked.me/images/uploads/iGMmDuxSjTGV.jpg",
              "https://rozetked.me/images/uploads/iGMmDuxSjTGV.jpg",
              "https://rozetked.me/images/uploads/iGMmDuxSjTGV.jpg",
            ],
          },
        },
      ];
      setState({
        ...state,
        projects: projects,
      });
      return projects;
    }

    return state.projects;
  },
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    const state = get(projectsState);
    set(projectsState, {
      ...state,
      projects: newValue,
    });
  },
});
