import Timeline from "../../components/about/timeline/Timeline.tsx";
import Title from "../../components/general/typography/title/Title.tsx";
import AdvantageСards from "../../components/about/advantageСards/AdvantageСards.tsx";

import style from "./about.module.scss";

import {
  TbHeartHandshake,
  TbMessageStar,
  TbTrendingUp,
  TbUsersGroup,
} from "react-icons/tb";

const cards = [
  {
    title: "Растущая студия",
    text: "Мы постоянно изучаем и делаем что-то новое",
    icon: <TbTrendingUp className={style.iconCard} />,
  },
  {
    title: "Дружная команда",
    text: "Каждый член команды уважает друг-друга",
    icon: <TbUsersGroup className={style.iconCard} />,
  },
  {
    title: "Любовь к проектам",
    text: "В каждый проект вкладываем любовь и заботу",
    icon: <TbHeartHandshake className={style.iconCard} />,
  },
  {
    title: "Индивидуальный подход",
    text: "Подходим индивидуально к каждому проекту",
    icon: <TbMessageStar className={style.iconCard} />,
  },
];

const About = () => {
  return (
    <div className={style.contentContainer}>
      <div>
        <Title>О нас</Title>
        <div className={style.text}>
          <div className={style.colorText}>SkyReglis Studio</div> — это
          небольшая команда ребят, которая занимается разработкой различных
          проектов с конца 2019 года. Портфель проектов нашей команды постоянно
          растет, и мы делаем игры, сайты, приложения и т.п. для многих тысяч
          пользователей и для ведущих платформ.
        </div>
        <div className={style.listCards}>
          {cards.map((item) => (
            <AdvantageСards icon={item.icon} text={item.text}>
              {item.title}
            </AdvantageСards>
          ))}
        </div>
      </div>

      <div>
        <Title>История студии</Title>
        <div className={style.timelineContainer}>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
