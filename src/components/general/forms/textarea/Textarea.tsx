import React from "react";
import style from "./Textarea.module.scss";

interface TextareaProps {
  value?: string;
  className?: string;
  placeholder?: string;
  name?: string;
}

const Textarea = ({
  placeholder,
  name,
  value,
  className,
  ...props
}: TextareaProps) => {
  return (
    <textarea
      className={style.container}
      {...props}
      placeholder={placeholder}
      name={name}
      value={value}
    />
  );
};

export default Textarea;
