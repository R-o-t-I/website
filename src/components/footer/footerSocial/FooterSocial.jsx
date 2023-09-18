import style from "./FooterSocial.module.scss";

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

const FooterSocial = () => {
  return (
    <div className={style.content}>
      <div className={style.header}>Соц. сети</div>
      <div className={style.listSocial}>
        {social.map((item, index) => (
          <a
            key={index}
            className={style.title}
            href={item.link}
            target="_blank"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;
