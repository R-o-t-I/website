import React from 'react';
import style from './Text.module.scss';

interface TextProps {
  children: React.ReactNode,
  className?: string,
}

const Text = ({children, className,  ...props} : TextProps) => {
  return (
    <div
      className={style.container}
      {...props}
    >
      <div className={style.text}>{children}</div>
    </div>
  );
};

export default Text;