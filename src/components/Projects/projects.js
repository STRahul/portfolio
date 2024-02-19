import React from "react";
import "./projects.css";
import { projects } from "../../data/projects";
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="project-text">Featured Works</h2>
      {projects.map((item) => (
        <div className="project-container" key={item.id}>
          <div className="wrapper">
            <div className="subwrapper">
              <div className="img-container">
                <img src={item.img} alt={item.title} />
                <div className="links">
                 {item.adressUrl && <a href={item.adressUrl} target="_blank" rel="noopener noreferrer">
                    See Demo
                  </a>}
                  <a href={item.codeUrl} target="_blank" rel="noopener noreferrer">
                    See Code
                  </a>
                </div>
              </div>
              <div className="text-container">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
