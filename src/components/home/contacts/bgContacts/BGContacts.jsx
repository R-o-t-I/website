import style from "./BGContacts.module.scss";

//Иконки
import { ReactComponent as IconLogo } from "../../../../img/logo.svg";

const BGContacts = () => {
  return (
    <>
      <div className={style.backgroundContacts}>
        <div className={style.line1}>
          <div className={style.itemsWrap}>
            <div className={`${style.items} ${style.marquee}`}>
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
            <div
              aria-hidden="true"
              className={`${style.items} ${style.marquee}`}
            >
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
          </div>
        </div>
        <div className={style.line2}>
          <div className={style.itemsWrap}>
            <div className={`${style.items} ${style.marquee} ${style.reverce}`}>
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
            <div
              aria-hidden="true"
              className={`${style.items} ${style.marquee} ${style.reverce}`}
            >
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
          </div>
        </div>
        <div className={style.line3}>
          <div className={style.itemsWrap}>
            <div className={`${style.items} ${style.marquee}`}>
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
            <div
              aria-hidden="true"
              className={`${style.items} ${style.marquee}`}
            >
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
          </div>
        </div>
        <div className={style.line4}>
          <div className={style.itemsWrap}>
            <div className={`${style.items} ${style.marquee} ${style.reverce}`}>
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
            <div
              aria-hidden="true"
              className={`${style.items} ${style.marquee} ${style.reverce}`}
            >
              <div className={style.textBGContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGColorContacts} />
              <div className={style.textBGColorContacts}>SKYREGLIS</div>
              <IconLogo className={style.logoBGContacts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BGContacts;
