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
            I'm a Front End Web Developer focused on creating clean, error-free
            websites that deliver a seamless user experience. My attention to
            detail ensures that every project meets high standards.
          </p>
        </article>
        <article className="services__card">
          <i className="ri-wordpress-line services__icon"></i>
          <h2 className="services__title">Wordpress Theme Customizer</h2>

          <p className="services__description">
            Transform your WordPress website into a unique and fully functional
            platform with my expert customization services. Whether you need to
            tweak the design, add new features, or optimize the performance,
            I’ve got you covered.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
