import React from 'react';
import style from './Input.module.scss';

interface InputProps {
  children: React.ReactNode,
  value: string,
  className?: string,
  type: string,
  placeholder: string,
  name: string,
}

const Input = ({children, type, placeholder, name, value, className,  ...props} : InputProps) => {
  return (
    <input
      className={style.container}
      {...props}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

export default Input;