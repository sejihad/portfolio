import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">
            SE <span>Jihad</span>
          </h1>

          <h2 className="footer__education">Web Developer</h2>
        </div>
        <div className="footer__social">
          <a
            href="mailto:ijihad639@gmail.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="ri-google-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/sejihadul/"
            target="_blank"
            className="footer__social-link"
          >
            <i className="ri-instagram-line"></i>
          </a>
          <a
            href="https://wa.me/01717639363"
            target="_blank"
            className="footer__social-link"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>

        <span className="footer__copy">All rights reserved by SE Jihad</span>
      </div>
    </footer>
  );
};

export default Footer;
