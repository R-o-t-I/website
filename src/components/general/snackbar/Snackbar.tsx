//https://html5css.ru/howto/howto_js_snackbar.php – инструкция

import React, { useEffect, useState } from "react";
import style from "./Snackbar.module.scss";
import useSnackbar from "../../../hooks/useSnackbar";

interface SnackbarProps {
  children: React.ReactNode;
  after?: React.ReactNode;
  className?: string;
  duration?: number;
  onClose?: () => void;
}

const Snackbar = ({
  children,
  after,
  className,
  onClose,
  duration = 3000,
  ...props
}: SnackbarProps) => {
  const [visibility, setVisibility] = useState("show");
  const [, setSnackbar] = useSnackbar();

  useEffect(() => {
    setTimeout(setVisibility, duration, "hidden");
  }, []);

  return (
    <div
      id="snackbar"
      className={`snackbar ${visibility}`}
      onAnimationEnd={() => {
        if (visibility === "hidden") {
          onClose && onClose();
          setSnackbar(null);
        }
      }}
      //className={style.container}
      {...props}
    >
      <div className={style.text}>{children}</div>
      <div className={style.after}>{after}</div>
    </div>
  );
};

export default Snackbar;
