import React from "react";
import Hero from "./Hero";
import Skill from "./Skill";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <div className="h-full">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      </div>
    </>
  );
};

export default Home;
