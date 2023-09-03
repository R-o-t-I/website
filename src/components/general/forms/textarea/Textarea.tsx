import React from 'react';
import style from './Textarea.module.scss';

interface TextareaProps {
  children: React.ReactNode,
  value: string,
  className?: string,
  type: string,
  placeholder: string,
  name: string,
}

const Textarea = ({children, type, placeholder, name, value, className,  ...props} : TextareaProps) => {
  return (
    <textarea
      className={style.container}
      {...props}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

export default Textarea;