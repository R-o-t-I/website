import React from "react";
import style from "./AdvantageСards.module.scss";

interface AdvantageСardsProps {
  children?: React.ReactNode;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  className?: boolean;
}

const AdvantageСards = ({
  children,
  text,
  icon,
  className,
  ...props
}: AdvantageСardsProps) => {
  return (
    <div {...props} className={style.container}>
      <div className={style.iconContainer}>{icon}</div>
      <div className={style.title}>{children}</div>
      <div className={style.text}>{text}</div>
    </div>
  );
};

export default AdvantageСards;
