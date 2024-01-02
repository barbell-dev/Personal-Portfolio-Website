import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="name">Varun Dunna</p>
      <div className="navbar-links">
        <Link
          to="about-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
        >
          About
        </Link>
        <Link
          to="education-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
        >
          Education
        </Link>
        <Link
          to="projects-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
        >
          Projects
        </Link>
        <Link
          to="contact-section"
          className="navbar-field"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
