import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaLayerGroup,
  FaRobot,
  FaRocket,
} from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Full-Stack MERN Applications",
      code: "const app = createMernPlatform()",
      desc: "Complete end-to-end web applications engineered with React.js, Node.js, Express, and MongoDB with modern state management, auth, and responsive layouts.",
      result: 'return "production-ready"',
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaCode size={32} />,
      file: "mern_app.jsx",
      color: "blue",
    },
    {
      title: "Smart Features & AI Integration",
      code: "const feature = await integrateAiService(data)",
      desc: "Building web projects efficiently using AI workflows, including smart API integrations, automation, and intelligent user features.",
      result: 'return "smart & scalable"',
      tech: ["AI Workflows", "API Integration", "Node.js", "React.js"],
      icon: <FaRobot size={32} />,
      file: "smart_service.js",
      color: "purple",
    },
    {
      title: "Frontend React.js Engineering",
      code: "render(<InteractiveUI theme='modern' />)",
      desc: "Responsive, component-driven user interfaces built using React.js, Tailwind CSS, and modern JavaScript (ES6+) for smooth, engaging user experiences.",
      result: 'return "pixel-perfect UI"',
      tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
      icon: <FaLayerGroup size={32} />,
      file: "frontend_view.jsx",
      color: "cyan",
    },
    {
      title: "Node.js & Express REST APIs",
      code: "router.use('/api/v1', apiEndpoints)",
      desc: "Secure, high-performance RESTful APIs built with Node.js and Express, featuring JWT authentication, role access control, and request validation.",
      result: 'return "200 OK connected"',
      tech: ["Node.js", "Express.js", "JWT", "REST APIs"],
      icon: <FaLaptopCode size={32} />,
      file: "api_gateway.js",
      color: "green",
    },
    {
      title: "MongoDB Schema & Aggregations",
      code: "db.collection.aggregate([pipeline])",
      desc: "Flexible, scalable NoSQL data modeling with Mongoose, schema validation, indexing, and complex aggregation pipelines for optimal query speeds.",
      result: 'return "optimized queries"',
      tech: ["MongoDB", "Mongoose", "NoSQL", "Indexing"],
      icon: <FaDatabase size={32} />,
      file: "mongo_schema.js",
      color: "orange",
    },
    {
      title: "Deployment & Maintenance",
      code: "pipeline.deploy({ target: 'production' })",
      desc: "Deployment of MERN applications to platforms like Vercel, Render, or VPS, domain & SSL configuration, bug fixing, and continuous code optimization.",
      result: 'return "99.9% uptime"',
      tech: ["Git", "GitHub", "Vite", "Production Deploy"],
      icon: <FaRocket size={32} />,
      file: "deploy.config.js",
      color: "red",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="badge">
            <span className="prompt">&gt;</span> class Services &#123;
          </div>
          <h2>
            What SE Jihad <span className="gradient">Builds</span>
          </h2>
          <p>// Modern MERN stack apps, AI-powered features, REST APIs, and responsive frontends</p>
        </div>

        <div className="services-grid">
          {services.map((s, index) => (
            <div
              className={`service-card ${s.color}`}
              key={s.title}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-topbar">
                <div className="dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="file">{s.file}</span>
                <div className="topbar-icons">
                  <span>x</span>
                  <span>-</span>
                  <span>[]</span>
                </div>
              </div>

              <div className="card-body">
                <div className="icon-wrapper">
                  <div className="icon">{s.icon}</div>
                </div>

                <h3>{s.title}</h3>
                <p className="code-line">
                  <span className="keyword">await</span> {s.code};
                </p>

                <p className="desc">{s.desc}</p>

                <div className="result-box">
                  <span className="result-arrow">-&gt;</span>
                  <span className="result">{s.result}</span>
                </div>

                <div className="tags">
                  {s.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-terminal">
          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">node deploy_services.js --mern-stack</span>
          </div>
          <div className="terminal-line success">
            <span className="arrow">OK</span>
            <span>6 core engineering and full-stack modules ready</span>
          </div>
          <div className="terminal-line typing">
            <span className="prompt">$</span>
            <span className="command">Ready to build your next modern web app</span>
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
