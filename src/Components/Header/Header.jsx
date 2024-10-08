import React, { useEffect, useRef } from "react";
import "./Header.css";

const Header = () => {
  const menuRef = useRef();

  const showMenu = () => {
    menuRef.current.style.right = "0";
  };

  const hideMenu = () => {
    menuRef.current.style.right = "-75%";
  };

  // Highlight active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav__link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.getAttribute("id");
          const navItem = document.querySelector(
            `.nav__link[href*=${sectionId}]`
          );

          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove("active-link"));
            navItem.classList.add("active-link");
          }
        });
      },
      {
        threshold: 0.5, // Adjusted threshold
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Scroll event for mobile devices
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Adjust offset as needed

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute("id");
          navLinks.forEach((link) => link.classList.remove("active-link"));
          const navItem = document.querySelector(
            `.nav__link[href*=${sectionId}]`
          );
          if (navItem) {
            navItem.classList.add("active-link");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          SE <span>Jihad</span>
        </a>

        <div ref={menuRef} className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={hideMenu}
              >
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={hideMenu}>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={hideMenu}>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={hideMenu}>
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={hideMenu}>
                Contact
              </a>
            </li>
          </ul>

          {/* Close button */}
          <div onClick={hideMenu} className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        {/* Toggle button */}
        <div onClick={showMenu} className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
