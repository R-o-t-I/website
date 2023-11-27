import Title from "../../general/typography/title/Title.tsx";
import style from "./ServicesSectionsHome.module.scss";

//Иконки
import {
  TbDeviceDesktop,
  TbApps,
  TbRobot,
  TbDeviceGamepad2,
  TbMasksTheater,
  TbStars,
  TbPalette,
} from "react-icons/tb";

const services = [
  {
    icon: <TbDeviceDesktop size={36} />,
    title: "Сайты",
    description: "интернет-магазины, лендинги",
  },
  {
    icon: <TbApps size={36} />,
    title: "Приложения",
    description: "VK Mini Apps, OK Apps и другие PWA/SPA",
  },
  {
    icon: <TbRobot size={36} />,
    title: "Чат-боты",
    description: "ВКонакте, Telegram, Discord и другие",
  },
  {
    icon: <TbDeviceGamepad2 size={36} />,
    title: "Веб-игры",
    description: "",
  },

  {
    icon: <TbPalette size={36} />,
    title: "Иллюстрации",
    description: "статичные, анимированные",
  },
  {
    icon: <TbMasksTheater size={36} />,
    title: "Маски ВКонтакте",
    description: "",
  },
  {
    icon: <TbStars size={36} color="var(--text_primary_reverse)" />,
    title: "Индивидуальные заказы",
    description: "",
  },
];

const ServicesSectionsHome = () => {
  return (
    <div className={style.content}>
      <Title>Создаем для наших клиентов</Title>
      <div className={style.list}>
        {services.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.header}>
              <div className={style.icon}>{item.icon}</div>
              <div className={style.text}>{item.title}</div>
            </div>
            <div
              className={
                item.description === ""
                  ? style.descriptionNone
                  : style.description
              }
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionsHome;
