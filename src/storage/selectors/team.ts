import { DefaultValue, selector } from "recoil";
import teamState from "../atoms/team";
import ITeamMember from "../../models/teamMember";

export const teamSelector = selector<ITeamMember[] | undefined>({
  key: "teamSelector",
  get: ({ get }) => get(teamState).team,
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) return;
    const state = get(teamState);
    set(teamState, {
      ...state,
      team: newValue,
    });
  },
});
