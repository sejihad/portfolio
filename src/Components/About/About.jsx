import React from "react";
import profile_img from "../../assets/profile.png";
import "./About.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h3 className="section__subtitle">
            My <span>Intro</span>
          </h3>

          <h2 className="section__title">About Me</h2>
          <p className="about__description">
            As a web developer, I specialize in creating responsive and
            user-friendly websites using HTML, CSS, JavaScript, and ReactJS. I
            focus on delivering clean, efficient code and seamless user
            experiences, with expertise in WordPress customization to develop
            tailored solutions that meet diverse client needs.
          </p>

          <a href="#contact" className="button">
            Contact Me
          </a>
        </div>

        <div className="about__image">
          <svg
            className="about__blob"
            viewBox="0 0 550 592"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBorder" mask-type="alpha">
              <path
                d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
              171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
              448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
              270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
              439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z"
                fill="black"
              />
            </mask>
            <g mask="url(#maskBorder)">
              <rect x="37" width="476" height="630" fill="url(#pattern2)" />

              <path
                d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
              192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
              580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
              40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
              175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z"
                stroke="black"
                strokeWidth="10"
              />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern3)" />

            <defs>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBorder"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              {/* Insert your profile (recommended size: 640 x 940)  */}
              <image
                className="about__img"
                id="imageBorder"
                width="770"
                height="1160"
                href={profile_img}
              />
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default About;
