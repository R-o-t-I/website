import FooterSocial from "../../components/footer/footerSocial/FooterSocial";
import style from "./developing.module.scss";

const social = [
  {
    title: "ВКонтакте",
    link: "https://vk.com/club191809582",
  },
  {
    title: "Telegram",
    link: "https://t.me/skyreglis",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/skyreglis",
  },
  {
    title: "Одноклассники",
    link: "https://ok.ru/skyreglis",
  },
];

const Developing = () => {
  return (
    <div className={style.contentContainer}>
      <div className={style.title}>Сайт в разработке</div>
      <div className={style.contactsContainer}>
        <div className={style.textContacts}>Наши контакты:</div>
        <div className={style.listSocial}>
          {social.map((item, index) => (
            <a
              key={index}
              className={style.titleSocial}
              href={item.link}
              target="_blank"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developing;
