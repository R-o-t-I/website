import React from "react";
import style from "./Option.module.scss";

interface OptionProps {
  children: string;
  onClick?: any;
}

const Option = ({ children, onClick }: OptionProps) => {
  return (
    <div className={style.Option} onClick={onClick}>
      {children}
    </div>
  );
};

export default Option;
