import React, { useState } from 'react';
import style from "./TabsItem.module.scss";

interface TitleProps {
  children: React.ReactNode,
  className?: string,
  selected: string
}

const TabsItem = ({children, className, selected,  ...props} : TitleProps) => {

    return (
        <div
          className={`
            ${style.container}
            ${selected === "" && style.active}
          `}
          {...props}
        >
          {children}
        </div>
    );
}

export default TabsItem;