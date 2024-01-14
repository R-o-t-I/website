import { atom } from "recoil";
import ITeamMember from "../../models/teamMember";

export interface TeamState {
  team?: ITeamMember[];
}

const teamState = atom<TeamState>({
  key: "teamState",
  default: {
    team: undefined,
  },
});

export default teamState;
