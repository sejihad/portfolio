import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import MySkill from "./Components/MySkill/MySkill";
import Project from "./Components/Project/Project";
import ScrollUp from "./Components/ScrollUp/ScrollUp";
import Services from "./Components/Services/Services";
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <MySkill />
        <Services />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
