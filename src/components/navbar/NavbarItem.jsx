import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./NavbarItem.module.scss";
import {useTranslation} from "react-i18next";

const NavbarItem = ({link, children}) => {
  const { t } = useTranslation();

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? `${style.headerLink} ${style.active}`
            : style.headerLink
        }
      >
        {t(children)}
      </NavLink>
    </li>
  );
};

export default NavbarItem;