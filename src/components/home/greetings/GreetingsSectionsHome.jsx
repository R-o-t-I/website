import style from "./GreetingsSectionsHome.module.scss";

import devices from "../../../img/devices.png";

const GreetingsSectionsHome = () => {
  return (
    <div className={style.content}>
      <div className={style.text}>
        <div className={style.colorText}>Разработка и дизайн</div>
        ваших проектов для максимальной прибыли
      </div>
      <div className={style.imagesContainer}>
        <img src={devices} className={style.imgDevices} />
      </div>
    </div>
  );
};

export default GreetingsSectionsHome;
