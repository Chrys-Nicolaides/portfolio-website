import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

import { ReactComponent as DownArrow } from "../images/DownArrow.svg";

// import { FaGithub, FaCodepen, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className="px-44 py-16">
        <h1 className="text-base text-gray-300 font-sans">Hello, my name is</h1>
        <h2 className="text-8xl py-3 text-white font-sans font-bold">Chrys.</h2>
        <h2 className="text-8xl text-red-300 font-sans font-bold">
          I do things hey.
        </h2>
        <p className="pt-8 pb-10 w-5/6 w-9/12 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          quis condimentum ex, ut sodales libero. Nam tortor nisl, commodo
          vestibulum malesuada tincidunt, tempor vel mi. Vivamus non mi rhoncus,
          semper eros vel, consequat dolor. Pellentesque dignissim nunc ligula,
          quis porttitor quam porttitor et.
        </p>
        <button className="button-primary">Say Hello</button>
        <DownArrow className="mt-6 h-10 text-gray-600" />
      </section>
      <div>
        <About />
        <Projects />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
