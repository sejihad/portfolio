import {
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaShoppingCart,
} from "react-icons/fa";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      title: "Full-Stack Admin Portal",
      file: "admin_portal.jsx",
      code: "await portal.processTransaction(req.body)",
      desc: "Administrative portal built with React and Node.js showcasing secure role-based access, data analytics, and real-time MongoDB operations.",
      stats: "MERN",
      statsLabel: "Admin",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      icon: <FaDatabase size={28} />,
      color: "orange",
      gradient: "linear-gradient(135deg, #f97316, #facc15)",
    },
    {
      title: "Community & Blog Web Application",
      file: "mern_community.jsx",
      code: "const feed = await fetchMernFeed()",
      desc: "Content-driven web application with user profiles, post creation, comments, like interactions, and full CRUD operations via MERN stack.",
      stats: "Full",
      statsLabel: "Stack",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaCode size={28} />,
      color: "green",
      gradient: "linear-gradient(135deg, #22c55e, #14b8a6)",
    },
    {
      title: "RESTful API & Auth Gateway",
      file: "auth_gateway.js",
      code: "jwt.verify(token, secretKey)",
      desc: "Scalable backend API service with JSON Web Token (JWT) authentication, protected endpoints, password hashing, and MongoDB aggregation pipelines.",
      stats: "REST",
      statsLabel: "API",
      tech: ["Node.js", "Express", "JWT", "MongoDB"],
      icon: <FaLaptopCode size={28} />,
      color: "teal",
      gradient: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
    },
    {
      title: "MERN E-Commerce Platform",
      file: "ecommerce_mern.jsx",
      code: "render(<ECommerceStore cart={cart} />)",
      desc: "Full-stack e-commerce web platform featuring product catalog, shopping cart, customer checkout, user authentication, and MongoDB database storage.",
      stats: "MERN",
      statsLabel: "Full-Stack",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaShoppingCart size={28} />,
      color: "blue",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <div className="badge">
            <span className="prompt">import</span> &#123; projects &#125;{" "}
            <span className="prompt">from</span> "jihad-portfolio";
          </div>
          <h2>
            Featured <span className="gradient">Work</span>
          </h2>
          <p>// Practical MERN stack, AI-integrated applications, and web builds</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${project.color}`}
              key={project.title}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="project-header">
                <div className="file-info">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="filename">{project.file}</span>
                </div>
                <div className="stats-badge">
                  <span className="stats-number">{project.stats}</span>
                  <span className="stats-label">{project.statsLabel}</span>
                </div>
              </div>

              <div className="project-body">
                <div className="icon-bg" style={{ background: project.gradient }}>
                  <div className="project-icon">{project.icon}</div>
                </div>

                <h3>{project.title}</h3>

                <div className="code-block">
                  <code>{project.code}</code>
                </div>

                <p className="description">{project.desc}</p>

                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="coming-soon">
          <div className="terminal-loader">
            <div className="loader-header">
              <span className="prompt">$</span>
              <span className="command">git push origin jihad/mern-stack</span>
            </div>
            <div className="loader-content">
              <div className="spinner"></div>
              <div className="loader-text">
                <span className="typing-text">More full-stack projects in progress...</span>
                <span className="cursor-blink">|</span>
              </div>
            </div>
            <div className="loader-footer">
              <span className="status">Building reactive, modern MERN web applications.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
