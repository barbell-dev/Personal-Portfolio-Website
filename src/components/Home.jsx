import "./Home.css";

export default function Home() {
  const downloadcv = () => {
    const cv_url =
      "https://drive.google.com/file/d/1uJ7HaOt_tzYPaB8Y80PsTBoXUd1GMIqz/view";
    window.open(cv_url, "_blank");
  };
  return (
    <div>
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
        <button className="contact">Contact</button>
        <a
          href="https://github.com/barbell-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="fab fa-github icon fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
