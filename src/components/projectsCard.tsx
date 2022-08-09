import "../styles/projectsCard.scss";
import Project from "./project";

import projectsJSON from "../projects.json";

export default function ProjectsCard() {
  //const [runOnce, setRunOnce] = useState(false);

  return (
    <div className="projectsContainer">
      <div className="projectsCard">
        <div className="projectsCard-title">
          <p>Projects</p>
        </div>
        <div className="projectsCard-projects scrollbar">
          {Object.keys(projectsJSON).map((key, i) => {
            return (
              <div key={i}>
                <Project {...projectsJSON[i]} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
