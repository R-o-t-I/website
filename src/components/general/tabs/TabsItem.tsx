import React, { useState } from "react";
import style from "./TabsItem.module.scss";

interface TitleProps {
  children: React.ReactNode;
  selected: boolean;
}

const TabsItem = ({ children, selected, ...props }: TitleProps) => {
  return (
    <div
      className={`
            ${style.container}
            ${selected && style.active}
          `}
      {...props}
    >
      {children}
    </div>
  );
};

export default TabsItem;
