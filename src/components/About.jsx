import "./About.css";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaGit } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-scroll";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
export default function About() {
  return (
    <div className="about" id="about-section">
      <p id="about-1">Get to know more</p>
      <p className="aboutme-heading" id="about-2">
        About Me
      </p>
      <img
        src={process.env.PUBLIC_URL + "/photo-2.jpg"}
        alt="photograph-2"
        id="image-2"
      />
      <p id="about-content">
        Hey there ! <br />
        <br></br>I am a <b>react</b> developer . I enjoy working out and cycling
        as they are therapuetic.
        <br /> I'd appreciate a good joke as much as a well optimised algorithm
        , Cheers !
        <br />
        <br />
        The following is the techstack I am comfortable working with :
      </p>

      <div class="about-icons">
        <p id="react-heading">
          <b>React</b>
        </p>
        <i id="react-icon">
          <FaReact size={33} />
        </i>
        <br></br>
        <p id="javascript-heading">
          <b>JavaScript</b>
        </p>
        <i id="javascript-icon">
          <IoLogoJavascript size={30} />
        </i>
        <br></br>
        <p id="mysql-heading">
          <b>MySQL</b>
        </p>
        <i id="mysql-icon">
          <SiMysql size={50} />
        </i>
        <br></br>
        <p id="node-heading">
          <b>Node JS</b>
        </p>
        <i id="node-icon">
          <DiNodejs size={70} />
        </i>
        <p id="git-heading">
          <b>Git</b>
        </p>
        <i id="git-icon">
          <FaGit size={30} />
        </i>
        <p id="github-heading">
          <b>GitHub</b>
        </p>
        <i id="github-icon">
          <FaSquareGithub size={30}></FaSquareGithub>
        </i>
      </div>
      <Link
        to="education-section" // Replace with the ID of the about section
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <MdOutlineKeyboardDoubleArrowDown size={50} id="arrow-about" />
      </Link>
    </div>
  );
}
