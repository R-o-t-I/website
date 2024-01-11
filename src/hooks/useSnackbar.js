import { useRecoilState } from "recoil";
import { snackbarSelector } from "../storage/selectors/main";

const useSnackbar = () => {
  return useRecoilState(snackbarSelector);
};

export default useSnackbar;
