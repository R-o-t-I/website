import { useState } from "react";
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
import Modal from "./components/general/modal/Modal";

function App() {
  const [modalActive, setModaleActive] = useState(true);

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
        <Footer />

        <Modal
          id="userTeamModal"
          active={modalActive}
          setActive={setModaleActive}
        >
          <div>
            <div>
              <div /*className={style.name}*/>Александр Тихонович</div>
              <div /*className={style.position}*/>Менеджер проектов</div>
            </div>
            <div /*className={style.avatarContainer}*/>
              <img /*className={style.avatar}*/ />
            </div>
          </div>
        </Modal>
      </Router>
    </div>
  );
}

export default App;
