import React, { ChangeEvent } from "react";
import style from "./Input.module.scss";

interface InputProps {
  value?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
}

const Input = ({
  type,
  placeholder,
  name,
  value,
  className,
  onChange,
  ...props
}: InputProps) => {
  return (
    <input
      className={style.container}
      {...props}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
