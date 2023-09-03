import Snackbar from "../../general/snackbar/Snackbar.tsx";
import style from "./FooterContacts.module.scss";

const info = [
  {
    title: "ЮРИДИЧЕСКИЙ АДРЕС",
    info: "105215, РОССИЯ, МОСКВА, ул. КОНСТАНТИНА ФЕДИНА, д. 13, кв. 850",
  },
  {
    title: "ИНН",
    info: "670402107812",
  },
  {
    title: "ОГРН",
    info: "322774600469805",
  },
  {
    title: "РАССЧЕТНЫЙ СЧЕТ",
    info: "40802810900003583494",
  },
  {
    title: "БАНК",
    info: "АО «ТИНЬКОФФ БАНК»",
  },
];

const FooterContacts = () => {
  function copy(item) {
    navigator.clipboard
      .writeText(`${item.info}`)
      .then(() => {
        // Получилось!
      })
      .catch((err) => {
        console.log("", err);
      });

    openSnackbar();
  }

  function openSnackbar() {
    // Получить снэк-бар DIV
    var x = document.getElementById("snackbar");

    // Добавить "show" класс для DIV
    x.className = "show";

    // После 3 секунд, извлеките класс show из DIV
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  return (
    <div className={style.content}>
      <div className={style.header}>Реквизиты</div>
      <div className={style.infoContainer}>
        {info.map((item) => (
          <div className={style.infoItemContainer}>
            <div className={style.title}>{item.title}</div>
            <div onClick={() => copy(item)} className={style.info}>
              {item.info}
            </div>
          </div>
        ))}
      </div>
      <Snackbar>Информация скопирована в буфер обмена</Snackbar>
    </div>
  );
};

export default FooterContacts;
