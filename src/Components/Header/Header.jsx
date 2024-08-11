import React, { useRef } from "react";
import "./Header.css";

const Header = () => {
  const menuRef = useRef();
  const showMenu = () => {
    menuRef.current.style.right = "0";
  };

  /*=============== REMOVE MENU MOBILE ===============*/
  const hideMenu = () => {
    menuRef.current.style.right = "-75%";
  };
  const navLink = document.querySelectorAll(".nav__link");
  const linkAction = () => {
    menuRef.current.style.right = "-75%";
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          SE <span>Jihad</span>
        </a>

        <div ref={menuRef} className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                Contact
              </a>
            </li>
          </ul>

          {/* <!-- colse button --> */}
          <div onClick={hideMenu} className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        {/* <!-- toggle button --> */}
        <div onClick={showMenu} className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
