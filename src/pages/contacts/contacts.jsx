import Title from "../../components/general/typography/title/Title.tsx";
import FormContacts from "../../components/home/contacts/formContacts/FormContacts.jsx";
import FooterContacts from "../../components/footer/footerContacts/FooterContacts.jsx";
import FooterSocial from "../../components/footer/footerSocial/FooterSocial.jsx";

import style from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={style.contentContainer}>
      <div>
        <Title>Контакты</Title>
        <div className={style.content}>
          <FormContacts />
          <div className={style.content2}>
            <FooterContacts />
            <FooterSocial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
