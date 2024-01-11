import { useRecoilState } from "recoil";
import { useProjectsSelector } from "../storage/selectors/projects";
import axios from "axios";
import Snackbar from "../components/general/snackbar/Snackbar";
import React from "react";
import useSnackbar from "./useSnackbar";

function useProjects() {
  const [state, setState] = useRecoilState(useProjectsSelector);

  return [state, setState];
}

export default useProjects;
