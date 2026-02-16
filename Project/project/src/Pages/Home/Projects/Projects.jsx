import { useState } from "react";
import { ProjectsObj } from "./ActualProjects";
import "./Projects.css";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects-container" className="projects-container">
        <div className="projects-text">
          <h1 className="projects-h1">Our Projects</h1>
          <p className="projects-p">
            For more details about our projects, please visit our{" "}
            <a
              className="projects-a"
              onClick={() => {
                document
                  .getElementById("Facecontainer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              facebook page
            </a>
            .
          </p>
        </div>

        <div className="projects-cards-container">
          {ProjectsObj.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.imageSrc} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p style={{ color: "#a9fb45", fontSize: "10px" }}>
                Made by: {project.author}
              </p>
              <fr></fr>
              <fr></fr>
              <h5
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(project.materials);
                    alert("Copied to clipboard!");
                  } catch (err) {
                    console.error("Failed to copy: ", err);
                  }
                }}
                
                style={{ color: "#ffffff", fontSize: "13px" }}
              >
                Materials used(Click to copy):
              </h5>
              <ul style={{ color: "#ffffff", fontSize: "11px" }}>
                {project.materials.map((item) => (<li>{item}</li>))}
              </ul>
              <button
                className="project-button"
                onClick={() => setSelectedProject(project)}
              >
                Expand
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP */}
      {selectedProject && (
        <div className="popup-overlay" onClick={() => setSelectedProject(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <img src={selectedProject.imageSrc} alt={selectedProject.title} />
            <h2 className="h2">{selectedProject.title}</h2>
            <p className="p">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
