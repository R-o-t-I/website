import { useRecoilState } from "recoil";
import { teamSelector } from "../storage/selectors/team";

const UseTeam = () => {
  const [team, setTeam] = useRecoilState(teamSelector);
  return [team, setTeam];
};

export default UseTeam;
