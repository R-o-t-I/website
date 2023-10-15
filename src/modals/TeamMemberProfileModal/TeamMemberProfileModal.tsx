import React from "react";
import Modal from "../../components/general/modal/Modal";
import { useRecoilState } from "recoil";
import { useModal } from "../../storage/selectors/main";
import ITeamMember from "../../models/teamMember";
import style from "./TeamMemberProfileModal.module.scss"

interface TeamMemberProfileModalProps {
  member: ITeamMember;
}

const TeamMemberProfileModal = ({ member }: TeamMemberProfileModalProps) => {
  const [, setModal] = useRecoilState(useModal);

  return (
    <Modal onClose={() => setModal(null)}>
      <div className={style.infoUserContainer}>
        <div className={style.infoUser}>
          <div className={style.name}>{member.name}</div>
          <div className={style.position}>{member.position}</div>
        </div>
        <div className={style.avatarContainer}>
          <img className={style.avatar} />
        </div>
      </div>
    </Modal>
  );
};

export default TeamMemberProfileModal;
