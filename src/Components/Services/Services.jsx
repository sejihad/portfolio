import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <section className="services section" id="services">
      <h3 className="section__subtitle">
        My <span>Services</span>
      </h3>

      <h2 className="section__title">What I Do</h2>

      <div className="services__container container grid">
        <article className="services__card">
          <i className="ri-code-s-slash-line services__icon"></i>
          <h2 className="services__title">Web developer</h2>

          <p className="services__description">
            I’m a Front End Web developer who is passionate about making
            error-free websites with 100% client satisfaction.
          </p>
        </article>
        <article className="services__card">
          <i className="ri-wordpress-line services__icon"></i>
          <h2 className="services__title">Wordpress Theme Customizer</h2>

          <p className="services__description">
            Passionate WordPress Theme Customizer . I find joy in crafting
            user-friendly, customizable sites.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
