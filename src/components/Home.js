import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaGithub, FaCodepen, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className="px-8 py-8">
        <h1 className="text-base text-gray-300 font-sans">Hello! My name is</h1>
        <h2 className="text-9xl py-3 text-white font-sans font-bold">Chrys.</h2>
        <h2 className="text-9xl text-red-200 font-sans font-bold">
          I do things hey.
        </h2>
        <p className="text-lg py-6 w-5/6 text-gray-400 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          quis condimentum ex, ut sodales libero. Nam tortor nisl, commodo
          vestibulum malesuada tincidunt, tempor vel mi. Vivamus non mi rhoncus,
          semper eros vel, consequat dolor. Pellentesque dignissim nunc ligula,
          quis porttitor quam porttitor et. Cras suscipit dapibus libero eget
          molestie.
        </p>
        <button className="button-primary">Say Hello</button>
        <div className="text-white p-4 flex">
          <div
            className="fill-current transition duration-600 ease-in-out transform
          hover:text-pink-200 hover:-translate-y-1 hover:scale-110  pace-y-4"
          >
            <a href="https://github.com/Chrys-Nicolaides">
              <FaGithub />
            </a>
          </div>

          <div
            className="fill-current transition duration-600 ease-in-out transform
          hover:text-pink-200 hover:-translate-y-1 hover:scale-110 space-y-4"
          >
            <a href="https://www.linkedin.com/in/chrysanthe-nicolaides-341877136/">
              <FaLinkedinIn />
            </a>
          </div>

          <div
            className="fill-current transition duration-600 ease-in-out transform
          hover:text-pink-200 hover:-translate-y-1 hover:scale-110 space-y-4"
          >
            <a href="https://codepen.io/Chrys-Nicolaides">
              <FaCodepen />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
