import Timeline from "../../components/about/timeline/Timeline.tsx";
import Title from "../../components/general/typography/title/Title.tsx";
import style from "./about.module.scss";

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
