import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);

      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          className="navbar-logo"
          onClick={goHome}
          aria-label="Go to homepage"
        >
          nita<span>.</span>
        </button>

        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <button onClick={() => goToSection("about")}>About</button>

          <button onClick={() => goToSection("projects")}>Projects</button>

          <button onClick={() => goToSection("experience")}>
            Experience
          </button>

          <button onClick={() => goToSection("stack")}>Stack</button>

          <button onClick={() => goToSection("achievements")}>
            Achievements
          </button>

          <button onClick={() => goToSection("leadership")}>
            Leadership
          </button>

          <a
            href="https://drive.google.com/drive/folders/1tu6B1A1xDTNzQJm9FC_-INLjuoJ40BFV?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            Resume
          </a>
        </nav>

        <button
          className="navbar-contact"
          onClick={() => goToSection("contact")}
        >
          Let's Talk
          <span>↗</span>
        </button>

        <button
          className={`navbar-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;