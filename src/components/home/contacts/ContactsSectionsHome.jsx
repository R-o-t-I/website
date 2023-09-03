import Title from "../../general/typography/title/Title.tsx";
import FormContacts from "./formContacts/FormContacts.jsx";
import BGContacts from "./bgContacts/BGContacts.jsx";

import style from "./ContactsSectionsHome.module.scss";

//Иконки
import { ImAttachment } from "react-icons/im";

import { ReactComponent as IconLogo } from "../../../img/logo.svg";

const ContactsSectionsHome = () => {
  return (
    <div className={style.content}>
      <Title>Связаться с нами</Title>
      <div className={style.formContentContainer}>
        <BGContacts />
        <FormContacts />
      </div>
    </div>
  );
};

export default ContactsSectionsHome;
