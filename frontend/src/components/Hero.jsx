import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="badge">
          Available for full-stack MERN web projects
        </div>

        <h1>
          SE Jihad <span>MERN Stack</span> Developer
        </h1>

        <p>
          Passionate Full-Stack Web Developer focused on building high-performance,
          scalable web applications with{" "}
          <b>
            MongoDB, Express.js, React.js, and Node.js
          </b>
          . Proficient in leveraging modern AI tools to accelerate development workflows
          and build complete projects efficiently.
        </p>

        <div className="location">Based in Bangladesh (Remote Worldwide)</div>

        <div className="skills">
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "REST APIs",
            "AI Tools",
            "Next.js",
            "Git & GitHub",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="buttons">
          <button className="primary" onClick={() => scrollTo("contact")}>
            Let's Talk
          </button>
          <button className="secondary" onClick={() => scrollTo("portfolio")}>
            View Projects
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal">
          <div className="dots">
            <span />
            <span />
            <span />
          </div>
          <p>$ npm create jihad-portfolio --stack mern</p>
        </div>

        <div className="code">
          <pre>
            <span className="keyword">const</span>{" "}
            <span className="property">developer</span> = {"{"}
            {"\n  "}
            <span className="property">name</span>:{" "}
            <span className="string">"SE Jihad"</span>,{"\n  "}
            <span className="property">role</span>:{" "}
            <span className="string">"Full-Stack MERN Developer"</span>,{"\n  "}
            <span className="property">stack</span>:{" "}
            <span className="array">
              ["MongoDB", "Express.js", "React.js", "Node.js"]
            </span>
            ,{"\n  "}
            <span className="property">workflow</span>:{" "}
            <span className="string">"AI-Assisted &amp; Modern Engineering"</span>,{"\n  "}
            <span className="property">builds</span>:{" "}
            <span className="function">ship</span>(
            <span className="array">["modern web apps", "MERN platforms", "REST APIs"]</span>){"\n"}
            {"}"};
          </pre>
        </div>
      </div>
    </section>
  );
}
