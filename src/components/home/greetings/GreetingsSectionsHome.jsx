import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <LazyLoadImage
          src={devices}
          effect="blur"
          className={style.imgDevices}
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
    </div>
  );
};

export default GreetingsSectionsHome;
