import "./Skills.css";

import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      sub: "const ui = buildReactiveFrontend();",
      val: 96,
      color: "cyan",
      icon: <SiReact size={32} />,
    },
    {
      name: "Node.js",
      sub: "server.listen(handleAsyncTraffic);",
      val: 93,
      color: "green",
      icon: <SiNodedotjs size={32} />,
    },
    {
      name: "Express.js",
      sub: "app.use('/api/v1', router);",
      val: 92,
      color: "teal",
      icon: <SiExpress size={32} />,
    },
    {
      name: "MongoDB",
      sub: "await Model.aggregate([pipeline]);",
      val: 91,
      color: "green",
      icon: <SiMongodb size={32} />,
    },
    {
      name: "JavaScript (ES6+)",
      sub: "const ship = async () => resolve();",
      val: 95,
      color: "yellow",
      icon: <SiJavascript size={32} />,
    },
    {
      name: "Tailwind CSS",
      sub: "className='grid grid-cols-1 md:grid-cols-3'",
      val: 94,
      color: "cyan",
      icon: <SiTailwindcss size={32} />,
    },
    {
      name: "RESTful APIs",
      sub: "res.status(200).json({ success: true, data });",
      val: 92,
      color: "teal",
      icon: <FaLaptopCode size={32} />,
    },
    {
      name: "AI-Assisted Dev",
      sub: "buildingProjectsWith(modernAiTools);",
      val: 90,
      color: "pink",
      icon: <SiOpenai size={32} />,
    },
    {
      name: "Redux & State",
      sub: "dispatch(updateApplicationState(payload));",
      val: 88,
      color: "purple",
      icon: <SiRedux size={32} />,
    },
    {
      name: "Git & GitHub",
      sub: "git commit -m 'feat: complete fullstack module'",
      val: 90,
      color: "orange",
      icon: <SiGit size={32} />,
    },
    {
      name: "Backend Architecture",
      sub: "middleware.verifyJwtAuth(req, res, next)",
      val: 91,
      color: "green",
      icon: <FaServer size={32} />,
    },
    {
      name: "Next.js & Full-Stack",
      sub: "export default async function Page() {}",
      val: 88,
      color: "blue",
      icon: <SiNextdotjs size={32} />,
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <div className="badge">MERN stack execution strength</div>
          <h2>
            &lt;Skills &amp; <span className="gradient-text">Expertise</span>
            /&gt;
          </h2>
          <p>
            A modern full-stack toolkit focused on MongoDB, Express.js, React.js,
            and Node.js, combined with modern AI tools to build projects efficiently.
          </p>
        </div>

        <div className="skills-box">
          <div className="skills-topbar">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <span className="topbar-title">stack.config.js - se-jihad</span>
            <div className="topbar-icons">
              <span>x</span>
              <span>-</span>
              <span>[]</span>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((s, index) => (
              <div
                className="skill-card"
                key={s.name}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="skill-top">
                  <div className="icon-wrapper">
                    <div className="icon">{s.icon}</div>
                  </div>

                  <div className="skill-text">
                    <h4>{s.name}</h4>
                    <p>{s.sub}</p>
                  </div>

                  <div className="percent">
                    <span className="percent-number">{s.val}%</span>
                  </div>
                </div>

                <div className="bar-container">
                  <div className="bar">
                    <div
                      className={`fill ${s.color}`}
                      style={{ width: `${s.val}%` }}
                    >
                      <div className="glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="terminal-output">
            <div className="terminal-header">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">npm run stack-audit</span>
              <span className="terminal-cursor"></span>
            </div>
            <div className="terminal-lines">
              <p className="terminal-line">
                <span className="success">OK</span> MERN stack environment verified (MongoDB, Express, React, Node.js)
              </p>
              <p className="terminal-line highlight">
                <span className="arrow">-&gt;</span> Ready for high-velocity full-stack web builds
              </p>
              <p className="terminal-line typing">
                <span className="prompt">$</span> deploy --stack mern
                <span className="cursor-blink"></span>
              </p>
            </div>
          </div>
        </div>

        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <SiReact size={32} />
            </div>
            <div className="stat-number">React</div>
           
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <SiNodedotjs size={32} />
            </div>
            <div className="stat-number">Node.js</div>
            
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <SiMongodb size={32} />
            </div>
            <div className="stat-number">MongoDB</div>
           
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <FaCode size={32} />
            </div>
            <div className="stat-number">MERN</div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
