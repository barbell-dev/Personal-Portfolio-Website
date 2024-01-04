import "./Projects.css";
export default function Projects() {
  const unicollabGithub = () => {
    window.open("https://github.com/barbell-dev/unicollab", "_blank");
  };
  const wealthmanagementsystemGithub = () => {
    window.open("https://github.com/UtkarshSeth03/Wealth-Management", "_blank");
  };
  const dragonrpgGithub = () => {
    window.open("https://github.com/barbell-dev/dragon-repeller", "_blank");
  };
  return (
    <div className="projects-section">
      <header className="header">
        <p id="header-1">Browse my recent</p>
        <p id="header-2">
          <b>Projects</b>
        </p>
      </header>
      <div id="project-1" className="project-box">
        {" "}
        <img
          src="https://wdi.umich.edu/wp-content/uploads/team-building-2.jpg"
          alt="unicollab"
          id="unicollab-img"
        />
        <p id="unicollab-heading">UniCollab</p>
        <button id="unicollab-github" onClick={unicollabGithub}>
          GitHub
        </button>
      </div>
      <div id="project-2" className="project-box">
        <img
          src="https://pirimidtech.com/wp-content/uploads/2021/06/Wealth-Management.jpeg"
          alt="wealth-photograph"
          id="wealth-management-system-img"
        />
        <p id="wealth-management-system-heading">Wealth Management System</p>

        <button
          id="wealth-management-system-github"
          onClick={wealthmanagementsystemGithub}
        >
          GitHub
        </button>
      </div>
      <div id="project-3" className="project-box">
        <img
          src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2019/10/best-dragon-games-1.jpg"
          alt="dragon-rpg-photograph"
          id="dragon-rpg-img"
        />
        <p id="dragon-rpg-heading">Dragon Repeller RPG</p>
        <button id="dragon-rpg-github" onClick={dragonrpgGithub}>
          GitHub
        </button>
      </div>
    </div>
  );
}
