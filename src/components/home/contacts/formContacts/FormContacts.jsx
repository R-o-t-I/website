import React from "react";
import Button from "../../../general/button/Button.tsx";
import Input from "../../../general/forms/input/Input.tsx";
import Textarea from "../../../general/forms/textarea/Textarea.tsx";
import Select from "../../../general/forms/Select/Select.tsx";
import Option from "../../../general/forms/Select/Option.tsx";
import style from "./FormContacts.module.scss";

//Иконки
import { ImAttachment } from "react-icons/im";

const FormContacts = () => {
  const selectOptions = [
    "Заказать услугу",
    "Баг/ошибка/замечание",
    "Сотрудничество",
    "Другое",
  ];
  const [value, setValue] = React.useState(selectOptions[0]);

  return (
    <div className={style.formContainer}>
      <div className={style.formBlock}>
        <div className={style.selectContainer}>
          {/*<select className={style.selectItemContainer}>
            <option>Заказать услугу</option>
            <option>Баг/ошибка/замечание</option>
            <option>Сотрудничество</option>
            <option>Другое</option>
          </select>*/}
          <Select value={value} onChange={setValue} options={selectOptions} />
        </div>

        <Input type="text" placeholder="Ваше имя" name="firstName" />

        <Input type="text" placeholder="Контакт для связи" />

        <Textarea type="text" placeholder="Описание" />

        <div className={style.sendContainer}>
          <Button mode="primary">Отправить</Button>
          <Button mode="tertiary" before={<ImAttachment size={30} />} />
        </div>
      </div>
    </div>
  );
};

export default FormContacts;
