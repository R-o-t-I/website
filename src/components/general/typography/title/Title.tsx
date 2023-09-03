import React from 'react';
import style from './Title.module.scss';

interface TitleProps {
  children: React.ReactNode,
  after: React.ReactNode,
  className?: string,
}

const Title = ({children, after, className,  ...props} : TitleProps) => {
  return (
    <div
      className={style.container}
      {...props}
    >
      <div className={style.text}>{children}</div>
      <div className={style.after}>{after}</div>
    </div>
  );
};

export default Title;