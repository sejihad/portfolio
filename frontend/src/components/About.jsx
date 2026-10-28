import { FaEnvelope, FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import "./About.css";

export default function About() {
  const skills = [
    {
      key: "mernStack",
      label: "MongoDB, Express.js, React.js, Node.js architecture",
      val: 96,
    },
    {
      key: "reactFrontend",
      label: "React.js, modern JavaScript (ES6+), Tailwind CSS, Redux",
      val: 95,
    },
    {
      key: "backendNode",
      label: "Node.js, Express, RESTful APIs, JWT authentication",
      val: 92,
    },
    {
      key: "nextjsFullstack",
      label: "Next.js, Full-Stack JavaScript & modern web tooling",
      val: 90,
    },
    {
      key: "mongodbData",
      label: "MongoDB, Mongoose schemas, aggregations & indexing",
      val: 90,
    },
    {
      key: "aiWorkflows",
      label: "Building projects efficiently with modern AI tools",
      val: 88,
    },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="about-top">
          <div className="about-badge">const aboutJihad = () =&gt; &#123;</div>
        </div>

        <h2 className="about-title">
          MERN Stack Developer &amp; <span>Problem Solver</span>
        </h2>

        <div className="code-box">
          <div className="code-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="file-name">developer.js</span>
          </div>

          <pre className="code">
            <span className="keyword">class</span>{" "}
            <span className="class-name">SEJihad</span> {"{"}
            {"\n  "}
            <span className="keyword">constructor</span>() {"{"}
            {"\n    "}
            <span className="property">this.name</span> ={" "}
            <span className="string">"SE Jihad"</span>;{"\n    "}
            <span className="property">this.role</span> ={" "}
            <span className="string">"Full-Stack MERN Developer"</span>;
            {"\n    "}
            <span className="property">this.coreLanguage</span> ={" "}
            <span className="string">"JavaScript (ES6+)"</span>;{"\n    "}
            <span className="property">this.primaryStack</span> ={" "}
            <span className="array">
              ["MongoDB", "Express.js", "React.js", "Node.js"]
            </span>
            ;{"\n    "}
            <span className="property">this.efficiency</span> ={" "}
            <span className="string">
              "Building projects with AI tools &amp; clean code"
            </span>
            ;{"\n    "}
            <span className="property">this.mission</span> ={" "}
            <span className="string">
              "Build high-performance web applications"
            </span>
            ;{"\n  "}
            {"}"}
            {"\n"}
            {"}"}
          </pre>
        </div>

        <p className="about-text">
          SE Jihad is a dedicated Full-Stack Web Developer focused on the
          <strong> MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>.
          With strong expertise in modern JavaScript (ES6+), responsive
          component design, and robust backend API architectures, he builds
          scalable, production-ready web applications. He is also skilled at
          utilizing modern AI tools to accelerate development, quickly solve
          technical challenges, and build complete projects with high
          efficiency.
        </p>

        <div className="about-actions">
          <button className="resume-btn" onClick={downloadResume}>
            Download Resume
          </button>

          <div className="socials">
            <a
              href="https://github.com/sejihad"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/sejihad"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="mailto:ijihad639@gmail.com"
              title="Email: ijihad639@gmail.com"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/8801717639363"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp: 01717639363"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="about-footer">
          return "building high-performance, modern JavaScript web
          applications";
        </div>
      </div>

      <div className="about-right">
        <div className="skills-box">
          <div className="skills-header">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="file-name">expertise.js</span>
          </div>

          <div className="skills-content">
            <p className="class-title">class ProfessionalExpertise &#123;</p>

            {skills.map((skill) => (
              <div key={skill.key} className="skill-block">
                <div className="skill-code">
                  <span className="self">this.</span>
                  <span className="key">{skill.key}</span>
                  <span> =</span>
                </div>

                <div className="skill-label">
                  // {skill.label}
                  <span>{skill.val}%</span>
                </div>

                <div className="bar">
                  <div
                    className="fill"
                    style={{ width: `${skill.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
