import FooterContacts from "./footerContacts/FooterContacts";
import FooterMenu from "./footerMenu/FooterMenu";
import FooterSocial from "./footerSocial/FooterSocial";

import style from "./Footer.module.scss";

//Иконки
import { ReactComponent as IconLogo } from "../../img/logo.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.infoFooter}>
          {/*<FooterContacts />*/}
          <div className={style.infoFooterRight}>
            <FooterMenu />
            <FooterSocial />
          </div>
        </div>
        <div className={style.basementFooter}>
          <div className={style.logo}>
            <IconLogo className={style.logo} />
          </div>
          <div className={style.documentContainer}>
            <div>Пользовательское соглашение</div>
            <div>Политика конфиденциальности</div>
          </div>
          <div className={style.copyright}>©2020 – 2023 SkyReglis Studio</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
