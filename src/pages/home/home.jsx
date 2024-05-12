import GreetingsSectionsHome from "../../components/home/greetings/GreetingsSectionsHome";
import ServicesSectionsHome from "../../components/home/services/ServicesSectionsHome";
import ProjectsSectionsHome from "../../components/home/projects/ProjectsSectionsHome";
import TeamSectionsHome from "../../components/home/team/TeamSectionsHome";
import ContactsSectionsHome from "../../components/home/contacts/ContactsSectionsHome";

import style from "./home.module.scss";

const Home = () => {
  return (
    <div className={style.contentContainer}>
      {console.log(0 || "")}
      <GreetingsSectionsHome />
      <ServicesSectionsHome />
      <ProjectsSectionsHome />
      <TeamSectionsHome />
      <ContactsSectionsHome />
    </div>
  );
};

export default Home;
