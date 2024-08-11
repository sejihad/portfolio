import React from "react";
import project from "../../assets/project/Project";
import "./Project.css";
const Project = () => {
  return (
    <section className="projects section" id="projects">
      <h3 className="section__subtitle">
        My <span>Jobs</span>
      </h3>

      <h2 className="section__title">Recent Projects</h2>

      <div className="projects__container container grid">
        {project.map((proj) => {
          return (
            <article key={proj.p_id} className="projects__card">
              <img
                src={proj.p_img}
                alt="projects image"
                className="projects__img"
              />

              <div className="projects__modal">
                <span className="projects__subtitle">Web</span>

                <h2 className="projects__title">Modern website</h2>

                <a
                  target="_blank"
                  href={proj.p_link}
                  className="projects__button"
                >
                  View demo <i className="ri-external-link-line"></i>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
