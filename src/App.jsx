import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";

import ProjectDetail from "./pages/ProjectDetail";

// HALAMAN UTAMA PORTFOLIO
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}

// ROUTING
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
