import { useEffect, useState } from "react";
import {
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLaptopCode,
  FaServer,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import profilePic from "../assets/profile.jpg";
import "./Intro.css";

export default function Profile() {
  const [typedText, setTypedText] = useState("");
  const fullText =
    "I build scalable, modern web applications with MERN stack and AI-assisted engineering tools.";
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTypingComplete = currentIndex >= fullText.length;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <section className="intro" id="about">
      <div className="intro-container">
        <div className="intro-left">
          <div className="image-box">
            <div className="image-header">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <span className="image-title">jihad-profile.jpg</span>
              <div className="header-icons">
                <span>x</span>
                <span>-</span>
                <span>[]</span>
              </div>
            </div>
            <div className="image-wrapper">
              <img src={profilePic} alt="SE Jihad" />
              <div className="image-overlay"></div>
              <div className="tech-badges">
                <span className="tech-badge">
                  <SiReact /> React
                </span>
                <span className="tech-badge">
                  <SiNodedotjs /> Node.js
                </span>
              </div>
            </div>
            <div className="image-footer">
              <span className="status-dot"></span>
              <span className="status-text">Available for projects</span>
              <span className="location-text">
                <FaGlobe /> Bangladesh
              </span>
            </div>
          </div>
        </div>

        <div className="intro-right">
          <div className="top-line">
            <div className="terminal-prompt">
              <span className="prompt-sign">&gt;_</span>
              <span className="prompt-text">DEVELOPER PROFILE</span>
            </div>
            <div className="badge">
              <span className="badge-icon">
                <FaStar />
              </span>
              <span>Full-Stack MERN Developer</span>
            </div>
          </div>

          <h1>
            SE <span className="gradient-name">Jihad</span>
          </h1>

          <div className="tags">
            <span className="tag">
              <SiReact className="tag-icon" /> REACT.JS
            </span>
            <span className="tag">
              <SiNodedotjs className="tag-icon" /> NODE.JS
            </span>
            <span className="tag">
              <SiExpress className="tag-icon" /> EXPRESS
            </span>
            <span className="tag">
              <SiMongodb className="tag-icon" /> MONGODB
            </span>
            <span className="tag">
              <SiJavascript className="tag-icon" /> JAVASCRIPT
            </span>
            <span className="tag">
              <SiTailwindcss className="tag-icon" /> TAILWIND
            </span>
            <span className="tag">
              <SiNextdotjs className="tag-icon" /> NEXT.JS
            </span>
            <span className="tag">
              <SiOpenai className="tag-icon" /> AI-ASSISTED
            </span>
          </div>

          <div className="desc-box">
            <div className="desc-header">
              <span className="quote-icon">"</span>
              <span className="desc-title">professional_bio.js</span>
              <span className="desc-version">v1.0.0</span>
            </div>
            <p className="typed-line">
              {typedText}
              {!isTypingComplete && <span className="cursor-blink">|</span>}
            </p>
            <p className="desc-continue">
              SE Jihad is a dedicated Full-Stack Web Developer focused on the
              <strong>
                {" "}
                MERN Stack (MongoDB, Express.js, React.js, Node.js)
              </strong>
              . With a strong grasp of clean component architecture, modern UI
              design, and scalable backend REST APIs, he builds reliable web
              applications. He also actively utilizes modern AI tools to
              accelerate project development and build complete solutions with
              high productivity.
            </p>
          </div>

          <div className="stats">
            <div className="stat-card">
              <div className="stat-icon">
                <FaCode />
              </div>
              <div className="stat-info">
                <h3 className="counter">MERN</h3>
                <p>STACK</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaLaptopCode />
              </div>
              <div className="stat-info">
                <h3 className="counter">React</h3>
                <p>FRONTEND</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FaServer />
              </div>
              <div className="stat-info">
                <h3 className="counter">Node</h3>
                <p>BACKEND</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="cta-primary" onClick={scrollToContact}>
              <span>Start Project</span>
              <span className="button-arrow">-&gt;</span>
            </button>
            <a
              href="/Resume.pdf"
              download="Resume.pdf"
              className="cta-secondary"
              style={{ textDecoration: "none" }}
            >
              <FaDownload className="btn-icon" />
              <span>Resume</span>
            </a>
          </div>

          <div className="links">
            <div className="links-header">
              <span className="links-icon">//</span>
              <span className="links-title">CORE_EXPERTISE_AND_STACKS</span>
              <span className="links-count">(6)</span>
            </div>

            <div className="chips">
              <span className="chip">
                <span className="chip-dot"></span>
                MERN Stack
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                React.js Frontend
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                Node.js &amp; Express
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                MongoDB &amp; Mongoose
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                RESTful APIs
              </span>
              <span className="chip">
                <span className="chip-dot"></span>
                AI-Assisted Dev
              </span>
            </div>
          </div>

          <div className="socials">
            <a
              href="https://github.com/sejihad"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:ijihad639@gmail.com"
              className="social-link"
              title="Email: ijihad639@gmail.com"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/8801717639363"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp: 01717639363"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
