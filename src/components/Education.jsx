import "./Education.css";
export default function Education() {
  return (
    <div className="education-section">
      <header>
        <p id="almamater">My Alma Mater</p>
      </header>
      <section className="university">
        <p id="university">PES University(Ring Road Campus)</p>
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
    </div>
  );
}
