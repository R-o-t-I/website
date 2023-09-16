import style from "./Timeline.module.scss";

const Timeline = () => {
  return (
    <div className={style.content}>
      <div className={style.dateContainer}>
        <div className={`${style.date} ${style.active}`}>Октябрь 2019</div>
        <div className={style.date}>Январь 2020</div>
        <div className={style.date}>2020</div>
        <div className={style.date}>2020</div>
      </div>
      <div className={style.infoContainer}>
        <div className={style.blockInfo}>
          <div className={style.info}>Началось все в октябре 2019 года</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
