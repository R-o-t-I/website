import React, { useState } from "react";
import style from "./Select.module.scss";
import Option from "./Option";
import useToBottomWindow from "../../hooks/useToBottomWindow";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => any;
}

const Select = ({ options, value, onChange }: SelectProps) => {
  const [opened, setOpened] = React.useState(false);
  const select = React.useRef<HTMLDivElement>(null);
  const optionsList = React.useRef<HTMLDivElement>(null);
  const toBottomWindow = useToBottomWindow(select);
  let optionsListHeight =
    optionsList?.current?.getBoundingClientRect().height || 0;

  function selectClick() {
    if (opened) {
      // @ts-ignore
      document.activeElement.blur();
    } else {
      setOpened((prevState) => !prevState);
    }
  }

  function selectBlur() {
    setOpened(false);
  }

  function selectValue(str: string) {
    onChange(str);
  }

  return (
    <div
      ref={select}
      className={`${style.Select} ${
        toBottomWindow >= optionsListHeight + 5 ? style.down : style.up
      }`}
      tabIndex={0}
      onClick={selectClick}
      onBlur={selectBlur}
    >
      <span>{value}</span>
      <div className={style.optionsList} ref={optionsList}>
        {options.map((option, index) => (
          <Option key={index} onClick={() => selectValue(option)}>
            {option}
          </Option>
        ))}
      </div>
    </div>
  );
};

export default Select;
