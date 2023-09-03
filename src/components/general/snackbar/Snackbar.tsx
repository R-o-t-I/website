//https://html5css.ru/howto/howto_js_snackbar.php – инструкция


import React from 'react';
import style from './Snackbar.module.scss';

interface SnackbarProps {
  children: React.ReactNode,
  after: React.ReactNode,
  className?: string,
}

const Snackbar = ({children, after, className,  ...props} : SnackbarProps) => {
  return (
    <div
      id="snackbar"
      className="snackbar"
      //className={style.container}
      {...props}
    >
      <div className={style.text}>{children}</div>
      <div className={style.after}>{after}</div>
    </div>
  );
};

export default Snackbar;