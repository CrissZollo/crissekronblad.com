import React, { useState } from "react";

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
        {Object.keys(projectsJSON).map((key, i) => {
          console.log(typeof key);
          return (
            <div key={i}>
              <Project {...projectsJSON["project_1"]} />;
            </div>
          );
        })}
      </div>
    </div>
  );
}
