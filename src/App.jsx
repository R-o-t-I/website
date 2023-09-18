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

function App() {
  const [modal] = useRecoilState(useModal);

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
        {modal}
      </Router>
    </div>
  );
}

export default App;
