import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Project from "./pages/projects/projectItem/project";
import Team from "./pages/team/team";
import Contacts from "./pages/contacts/contacts";

import ScrollToTop from "./utils/scrollToTop";
import { useRecoilState } from "recoil";
import { useModal } from "./storage/selectors/main";
import useSnackbar from "./hooks/useSnackbar";
import React, { useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Snackbar from "./components/general/snackbar/Snackbar";
import useProjects from "./hooks/useProjects";
import useTeam from "./hooks/useTeam";

let isInit = false;
function App() {
  const [modal] = useRecoilState(useModal);
  const [snackbar, setSnackbar] = useSnackbar();
  const [, setProjects] = useProjects();
  const [, setTeam] = useTeam();

  useLayoutEffect(() => {
    if (!isInit) {
      getProjects();
      getTeam();
    }
    isInit = true;
    async function getProjects() {
      try {
        const { data } = await axios.get("projects.get");
        console.log(data);
        setProjects(data.projects);
      } catch (e) {
        console.error(e);
        setSnackbar(
          <Snackbar>
            {e?.response?.data?.error || "Неизвестная ошибка"}
          </Snackbar>,
        );
      }
    }

    async function getTeam() {
      try {
        const { data } = await axios.get("team.get");
        console.log(data);
        setTeam(data.team);
      } catch (e) {
        console.error(e);
        setSnackbar(
          <Snackbar>
            {e?.response?.data?.error || "Неизвестная ошибка"}
          </Snackbar>,
        );
      }
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div style={{ marginBottom: 70 }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        {/*<Order />*/}
        <Footer />
        {modal}
        {snackbar}
      </Router>
    </div>
  );
}

export default App;
