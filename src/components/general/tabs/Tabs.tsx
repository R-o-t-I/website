import React from "react";
import style from "./Tabs.module.scss";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  return <div className={style.Tabs}>{children}</div>;
};

export default Tabs;
