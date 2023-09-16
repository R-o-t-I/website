import style from "./TeamList.module.scss";

const team = [
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Александр Тихонович",
    position: "Менеджер проектов",
    vk: "https://vk.com/alexander_tihonovich",
  },
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Артем Петрунин",
    position: "Fullstack-разработчик",
    vk: "",
  },
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Евгений Руденок",
    position: "Backend-разработчик",
    vk: "",
  },
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Анна Безуглова",
    position: "Художник-иллюстратор",
    vk: "",
  },
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Владислав Мельничук",
    position: "UX/UI-дизайнер",
    vk: "",
  },
  {
    avatar:
      "https://cdn.icon-icons.com/icons2/3708/PNG/512/man_person_people_avatar_icon_230017.png",
    name: "Любовь к работе",
    position: "Всегда с нами",
    vk: "",
  },
];

const TeamList = () => {
  return (
    <>
      <div className={style.listTeam}>
        {team.map((item) => (
          <div className={style.teamItem}>
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
