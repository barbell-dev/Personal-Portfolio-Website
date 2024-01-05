// Home.js

import React, { useState, useEffect } from "react";
import "./Home.css";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-scroll";

export default function Home() {
  const [navbarClicked, setNavbarClicked] = useState(false);

  const downloadcv = () => {
    const cv_url =
      "https://drive.google.com/file/d/1uJ7HaOt_tzYPaB8Y80PsTBoXUd1GMIqz/view";
    window.open(cv_url, "_blank");
  };

  const dropEmail = () => {
    const emailAddress = "varun.dunna2524@gmail.com";
    const subject = "";
    const body = "";
    const mailtoLink = `mailto:${encodeURIComponent(
      emailAddress
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  useEffect(() => {
    const handleNavbarClick = () => {
      setNavbarClicked(true);
    };

    const handleScroll = () => {
      setNavbarClicked(false);
    };

    document.addEventListener("navbarClicked", handleNavbarClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("navbarClicked", handleNavbarClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`home-section ${navbarClicked ? "navbar-clicked" : ""}`}>
      <img
        src={process.env.PUBLIC_URL + "/photo-1.jpg"}
        alt="photograph-1"
        id="image-1"
      />
      <div className="home-text">
        <p className="home-text-1">Hello, I'm</p>
        <p className="home-text-2">Varun Dunna</p>
        <p className="home-text-3">Frontend Developer</p>
      </div>
      <div className="buttons">
        <button className="cv" onClick={downloadcv}>
          Download CV
        </button>
        <button className="contact" onClick={dropEmail}>
          Email
        </button>
        <a
          href="https://github.com/barbell-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github icon fa-2x"></i>
        </a>
      </div>
      <Link
        to="about-section"
        spy={true}
        smooth={true}
        offset={-20}
        duration={800}
      >
        <MdOutlineKeyboardDoubleArrowDown size={50} id="arrow-home" />
      </Link>
    </div>
  );
}
