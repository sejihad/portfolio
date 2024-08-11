import React, { useEffect, useRef } from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  const scrollRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollY >= 50
        ? (scrollRef.current.style.bottom = "2rem")
        : (scrollRef.current.style.bottom = "-50%");
    });
  }, []);
  return (
    <a ref={scrollRef} href="#" className="scrollup" id="scroll-up">
      <i className="ri-arrow-up-line"></i>
    </a>
  );
};

export default ScrollUp;
