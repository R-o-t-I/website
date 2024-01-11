import React from "react";
import Button from "../../../general/button/Button.tsx";
import Input from "../../../general/forms/input/Input.tsx";
import Textarea from "../../../general/forms/textarea/Textarea.tsx";
import Select from "../../../general/forms/Select/Select.tsx";
import Option from "../../../general/forms/Select/Option.tsx";
import style from "./FormContacts.module.scss";

//Иконки
import { ImAttachment } from "react-icons/im";
import axios from "axios";
import useSnackbar from "../../../../hooks/useSnackbar";
import Snackbar from "../../../general/snackbar/Snackbar";

const FormContacts = () => {
  const [snackbar, setSnackbar] = useSnackbar();
  const selectOptions = [
    { ru: "Заказать услугу", name: "order_service", en: "Order a service" },
    {
      ru: "Баг/ошибка/замечание",
      name: "bug_error_remark",
      en: "Bug/error/remark",
    },
    { ru: "Сотрудничество", name: "cooperation", en: "Cooperation" },
    { ru: "Другое", name: "other", en: "Other" },
  ];
  const [value, setValue] = React.useState(selectOptions[0].name);
  const [username, setUsername] = React.useState("");
  const [contacts, setContacts] = React.useState("");
  const [description, setDescription] = React.useState("");

  async function sendForm() {
    try {
      const { data } = await axios.post("proposals.send", {
        type: value,
        username,
        contacts,
        description,
      });

      setSnackbar(<Snackbar>{data.message}</Snackbar>);
    } catch (e) {
      console.error(e);
      setSnackbar(
        <Snackbar>{e?.response?.data?.error || "Неизвестная ошибка"}</Snackbar>,
      );
    }
  }

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
          <Select
            value={selectOptions.find((o) => o.name === value).ru}
            onChange={(v) =>
              setValue(selectOptions.find((o) => o.ru === v).name)
            }
            options={selectOptions.map((o) => o.ru)}
          />
        </div>

        <Input
          type="text"
          placeholder="Ваше имя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Контакт для связи"
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
        />
        <Textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={style.sendContainer}>
          <Button mode="primary" onClick={sendForm}>
            Отправить
          </Button>
          <Button mode="tertiary" before={<ImAttachment size={30} />} />
        </div>
      </div>
      {snackbar}
    </div>
  );
};

export default FormContacts;
