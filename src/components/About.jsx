import "./About.css";

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
    </div>
  );
}
