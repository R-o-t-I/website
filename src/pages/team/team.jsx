import Title from "../../components/general/typography/title/Title.tsx";
import TeamList from "../../components/home/team/teamList/TeamList.jsx";
import Input from "../../components/general/forms/input/Input.tsx";
import Textarea from "../../components/general/forms/textarea/Textarea.tsx";
import Button from "../../components/general/button/Button.tsx";

import style from "./team.module.scss";

//Иконки
import { ImAttachment } from "react-icons/im";
import axios from "axios";
import { useState } from "react";
import useSnackbar from "../../hooks/useSnackbar";
import Snackbar from "../../components/general/snackbar/Snackbar";

const Team = () => {
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [, setSnackbar] = useSnackbar();

  async function sendJoin() {
    try {
      await axios.post("team.join", {
        username,
        about,
      });
      setSnackbar(<Snackbar>Заявка отправлена</Snackbar>);
    } catch (e) {
      setSnackbar(
        <Snackbar>{e?.response?.data?.error || "Неизвестная ошибка"}</Snackbar>,
      );
    }
  }

  return (
    <div className={style.contentContainer}>
      <div>
        <Title>Команда</Title>
        <TeamList />
      </div>

      <Title>Присоединяйтесь к нам</Title>
      <div className={style.application}>
        <div className={style.itemContainer}>
          <div className={style.textApplication}>
            <div>Хотите работать вместе с нами?</div>
            <div>Подавайте заявку!</div>
          </div>
        </div>
        <div className={style.itemContainer}>
          <div className={style.fromContainer}>
            <div className={style.formBlock}>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ваше имя"
              />
              <Textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Расскажите о себе"
              />
              <div className={style.sendContainer}>
                <Button mode="primary" onClick={sendJoin}>
                  Отправить
                </Button>
                <Button mode="tertiary" before={<ImAttachment size={30} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
