import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import style from "./ButtonTheme.module.scss";

import { TbMoon, TbSunHigh } from "react-icons/tb";

const ButtonTheme = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    if (darkMode === "light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <div className={style.button} onClick={toggleDarkMode}>
      {darkMode === "dark" ? (
        <TbSunHigh size={20} className={style.buttonSun} />
      ) : (
        <TbMoon size={20} className={style.buttonMoon} />
      )}
    </div>
  );
};

export default ButtonTheme;
