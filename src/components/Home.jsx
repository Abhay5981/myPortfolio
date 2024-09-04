import React from "react";
import Hero from "./Hero";
import Skill from "./Skill";
import Contact from "./Contact";
import About from "./About";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <div className="h-full">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      </div>
    </>
  );
};

export default Home;
