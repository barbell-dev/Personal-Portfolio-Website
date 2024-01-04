import "./Education.css";
import { Link } from "react-scroll";

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
export default function Education() {
  return (
    <div className="education-section">
      <header>
        <p id="almamater">My Alma Mater</p>
      </header>
      <section className="university">
        <p id="university">PES University - Ring Road Campus</p>
        <img
          src="https://images.collegedunia.com/public/college_data/images/campusimage/1434627666campusr.jpg"
          alt="university-photograph"
        />
        <p id="program">Program &nbsp;: B-Tech</p>
        <br></br>
        <p id="stream">
          Stream &nbsp;&nbsp;&nbsp;&nbsp;: Computer Science and Engineering
        </p>
        <br></br>
        <p id="gpa-10">
          CGPA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
          7.6&nbsp;&nbsp;(10 pointer scale)
        </p>
        <br></br>
        <p id="gpa-5">
          GPA
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          &nbsp;3.8&nbsp;&nbsp;(5 pointer scale)
        </p>
      </section>
      <section className="school">
        <p id="school">HAL PUBLIC SCHOOL</p>
        <img
          src="https://halec.co.in/assets/images/hal_school2.jpg"
          alt="school-photograph"
          id="school-img"
        />
        <p id="class-12">
          AISSCE(Class - XII) :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 92.8%
        </p>

        <p id="class-10">
          AISSE(Class - X)
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          91.2%
        </p>
      </section>
      <Link
        to="projects-section" // Replace with the ID of the about section
        spy={true}
        smooth={true}
        offset={0}
        duration={800}
      >
        <MdOutlineKeyboardDoubleArrowDown size={50} id="arrow-education" />
      </Link>
    </div>
  );
}
