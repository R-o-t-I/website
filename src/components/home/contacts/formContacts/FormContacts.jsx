import Button from "../../../general/button/Button.tsx";
import Input from "../../../general/forms/input/Input.tsx";
import Textarea from "../../../general/forms/textarea/Textarea.tsx";
import style from "./FormContacts.module.scss";

//Иконки
import { ImAttachment } from "react-icons/im";

const FormContacts = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.formBlock}>
        <div className={style.selectContainer}>
          <select className={style.selectItemContainer}>
            <option>Заказать услугу</option>
            <option>Баг/ошибка/замечание</option>
            <option>Сотрудничество</option>
            <option>Другое</option>
          </select>
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
