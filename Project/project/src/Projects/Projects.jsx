import { useState } from "react";
import { ProjectsObj } from "./ActualProjects";
import "./Projects.css";

function Projects() {
  return (
    <>
      <section id="projects-container" className="projects-container">
        <div className="projects-text">
          <h1 className="projects-h1">Our Projects</h1>
          <p className="projects-p">
            For more details about our projects, please visit our{" "}
            <a className="projects-a"
              onClick={() => {
                document.getElementById("Facecontainer").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              facebook page
            </a>
            .
          </p>

        </div>
        <div className="projects-cards-container">
          {ProjectsObj.map((project) => {
            return (
              <div id={project.id} className="project-card">
                <img src={project.imageSrc} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Projects;