import style from "./TeamList.module.scss";
import { useRecoilState } from "recoil";
import { useModal } from "../../../../storage/selectors/main";
import TeamMemberProfileModal from "../../../../modals/TeamMemberProfileModal/TeamMemberProfileModal";
import useTeam from "../../../../hooks/useTeam";

const TeamList = () => {
  const [, setModal] = useRecoilState(useModal);
  const [team] = useTeam();

  function toMemberProfile(member) {
    setModal(<TeamMemberProfileModal member={member} />);
  }

  return (
    <>
      <div className={style.listTeam}>
        {team?.map((item) => (
          <div
            key={item.id}
            className={style.teamItem}
            onClick={() => toMemberProfile(item)}
          >
            <div className={style.avatarContainer}>
              <img src={item.photo} />
            </div>
            <div className={style.name}>
              {item.name} {item.surname}
            </div>
            <div className={style.position}>{item.post}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamList;
