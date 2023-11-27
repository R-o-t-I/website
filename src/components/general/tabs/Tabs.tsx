import React from "react";
import style from "./Tabs.module.scss";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <div className={style.container}>{children}</div>;
};

export default Tabs;
