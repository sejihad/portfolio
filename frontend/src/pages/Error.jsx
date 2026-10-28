import { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaBug,
  FaCode,
  FaExclamationTriangle,
  FaHome,
  FaRocket,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Error.css";

export default function Error() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText((prev) => (prev === "404" ? "!!ERROR!!" : "404"));
    }, 5000);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(timer);
    };
  }, [navigate]);

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-terminal">
          <div className="terminal-header">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="terminal-title">error.log - Page Not Found</span>
            <div className="terminal-icons">
              <span>x</span>
              <span>-</span>
              <span>[]</span>
            </div>
          </div>

          <div className="terminal-body">
            <div className="glitch-wrapper">
              <h1 className="glitch-text" data-text={glitchText}>
                {glitchText}
              </h1>
            </div>

            <h2 className="error-title">Page Not Found</h2>

            <div className="error-message">
              <p className="error-line">
                <span className="prompt">&gt;</span>
                <span className="command">router.findRoute(window.location.pathname)</span>
              </p>
              <p className="error-output">
                <span className="error-symbol">x</span>
                Error: The requested route does not exist or has been moved.
              </p>
              <p className="error-suggestion">
                <span className="arrow">-&gt;</span>
                Try checking the URL or navigating back to the homepage.
              </p>
            </div>

            <div className="error-code-block">
              <pre>
                <code>
                  <span className="keyword">try</span> &#123;<br />
                  &nbsp;&nbsp;<span className="keyword">const</span> page = <span className="function">await findPage</span>(requestedUrl);<br />
                  &nbsp;&nbsp;<span className="keyword">return</span> page;<br />
                  &#125; <span className="keyword">catch</span> (err) &#123;<br />
                  &nbsp;&nbsp;<span className="function">navigate</span>(<span className="string">"/"</span>);<br />
                  &#125;
                </code>
              </pre>
            </div>

            <div className="error-buttons">
              <button className="error-btn back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft className="btn-icon" />
                Go Back
              </button>
              <button className="error-btn home-btn" onClick={() => navigate("/")}>
                <FaHome className="btn-icon" />
                Home Page
              </button>
            </div>

            <div className="countdown">
              <span className="countdown-text">
                Redirecting to homepage in
                <span className="countdown-number">{countdown}</span>
                seconds
              </span>
              <div className="countdown-bar">
                <div
                  className="countdown-progress"
                  style={{ width: `${(countdown / 5) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="error-status">
              <div className="status-item">
                <FaBug className="status-icon" />
                <span>Status: 404</span>
              </div>
              <div className="status-item">
                <FaExclamationTriangle className="status-icon" />
                <span>Suggestion: Check URL</span>
              </div>
              <div className="status-item">
                <FaCode className="status-icon" />
                <span>Error Code: NOT_FOUND</span>
              </div>
              <div className="status-item">
                <FaRocket className="status-icon" />
                <span>Try Again: {countdown}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
