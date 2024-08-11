import React from "react";
import "./MySkill.css";
const MySkill = () => {
  return (
    <section className="skills section">
      <div className="skills__container container grid">
        <div className="skills__data">
          <h3 className="section__subtitle">
            Favourite <span>Skills</span>
          </h3>

          <h2 className="section__title">My Skills</h2>

          <p className="skills__description">
            See fully what skills I have and perform, to develop the projects
            for you.
          </p>

          <a href="#projects" className="button">
            See Projects
          </a>
        </div>

        <div className="skills__content">
          <ol className="skills__group">
            <li className="skills__item">HTML & CSS</li>
            <li className="skills__item">JavaScript</li>
            <li className="skills__item">Bootstrap</li>
            <li className="skills__item">ReactJs</li>
          </ol>
          <ol className="skills__group" start="5">
            <li className="skills__item">JQUERY</li>
            <li className="skills__item">Wordpress</li>
            <li className="skills__item">GIT & GITHUB</li>
            <li className="skills__item">Photoshop</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MySkill;
