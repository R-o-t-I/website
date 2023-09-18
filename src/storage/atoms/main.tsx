import { atom } from "recoil";
import React from "react";
import TeamMemberProfileModal from "../../modals/TeamMemberProfileModal";

interface IMainState {
  modal?: React.ReactNode;
  snackbar?: React.ReactNode;
}

const mainState = atom<IMainState>({
  key: "mainState",
  default: {
    modal: <TeamMemberProfileModal />,
  },
});

export default mainState;
