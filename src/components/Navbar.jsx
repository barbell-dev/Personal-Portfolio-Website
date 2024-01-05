// Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.dispatchEvent(new Event("navbarClicked"));
  };

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      <p className="name">Varun Dunna</p>
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="about-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-20}
          duration={800}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="education-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-20}
          duration={800}
          onClick={() => setMenuOpen(false)}
        >
          Education
        </Link>
        <Link
          to="projects-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-20}
          duration={800}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="contact-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-20}
          duration={800}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
