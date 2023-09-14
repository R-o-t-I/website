import { useRecoilState } from "recoil";
import { useProjectsSelector } from "../storage/selectors/projects";

function useProjects() {
  const [state, setState] = useRecoilState(useProjectsSelector);

  return [state, setState];
}

export default useProjects;
