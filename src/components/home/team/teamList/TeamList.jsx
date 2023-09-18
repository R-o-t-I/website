import style from "./TeamList.module.scss";
import { useRecoilState } from "recoil";
import { useModal } from "../../../../storage/selectors/main";
import TeamMemberProfileModal from "../../../../modals/TeamMemberProfileModal";

const team = [
  {
    id: 1,
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Александр Тихонович",
    position: "Менеджер проектов",
    vk: "https://vk.com/alexander_tihonovich",
  },
  {
    id: 2,
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Артем Петрунин",
    position: "Fullstack-разработчик",
    vk: "",
  },
  {
    id: 3,
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Евгений Руденок",
    position: "Backend-разработчик",
    vk: "",
  },
  {
    id: 4,
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Анна Безуглова",
    position: "Художник-иллюстратор",
    vk: "",
  },
  {
    id: 5,
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Владислав Мельничук",
    position: "UX/UI-дизайнер",
    vk: "",
  },
  {
    id: 6,
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Любовь к работе",
    position: "Всегда с нами",
    vk: "",
  },
];

const TeamList = () => {
  const [, setModal] = useRecoilState(useModal);

  function toMemberProfile(member) {
    setModal(<TeamMemberProfileModal member={member} />);
  }

  return (
    <>
      <div className={style.listTeam}>
        {team.map((item) => (
          <div
            key={item.id}
            className={style.teamItem}
            onClick={() => toMemberProfile(item)}
          >
            <div className={style.avatarContainer}>
              <img src={item.avatar} />
            </div>
            <div className={style.name}>{item.name}</div>
            <div className={style.position}>{item.position}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamList;
