import React from "react";
import style from "./Button.module.scss";

interface TitleProps {
  children?: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  className?: boolean;
  mode?: string;
}

const Button = ({
  children,
  mode,
  before,
  after,
  className,
  ...props
}: TitleProps) => {
  return (
    <button
      className={`
        ${style.container}
        ${mode === "primary" && style.primary}
        ${mode === "secondary" && style.secondary}
        ${mode === "tertiary" && style.tertiary}
        ${mode === "outline" && style.outline}
      `}
      {...props}
    >
      <div className={style.before}>{before}</div>
      <div className={style.text}>{children}</div>
      <div className={style.after}>{after}</div>
    </button>
  );
};

export default Button;
