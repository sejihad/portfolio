import React from "react";
import profile_img from "../../assets/profile.png";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content">
          <div className="home__data">
            <h3 className="home__subtitle">
              Hello, <span>I'm</span>
            </h3>

            <h1 className="home__title">SE Jihad</h1>

            <h3 className="home__education">Web Developer</h3>

            <p className="home__description">
              I'm a Front End Web Developer focused on creating clean,
              error-free websites that deliver a seamless user experience. My
              attention to detail ensures that every project meets high
              standards.
            </p>

            <a href="#contact" className="button">
              Contact Me
            </a>
          </div>

          <div className="home__social">
            <a
              href="https://github.com/sejihad"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://www.facebook.com/jihad639/"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-facebook-circle-line"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/jihad-mia-344a962b8/"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>

        <div className="home__image">
          <svg
            className="home__blob"
            viewBox="0 0 550 591"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBlob" mask-type="alpha">
              <path
                d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                     170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                     447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                     587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                     438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
              />
            </mask>
            <g mask="url(#maskBlob)">
              <path
                d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                     170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                     447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                     587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                     438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
              />

              <rect x="37" width="476" height="630" fill="url(#pattern0)" />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern1)" />

            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBlob"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBlob"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
              <image
                className="home__img"
                id="imageBlob"
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

export default Home;
