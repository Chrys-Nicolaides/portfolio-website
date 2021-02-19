import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import DesignSystemsDark from "../images/DesignSystemsDark.png";
import DesignSystemsLight from "../images/DesignSystemsLight.png";
import { FaGithub, FaCodepen, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
      <section className="px-44 py-8 text-white">
        <div className="flex row">
          <h1 className="text-red-300 text-3xl font-bold mr-6 flex items-end">
            02.
          </h1>
          <h1 className="text-gray-200 text-5xl font-bold flex items-end">
            Projects I have built
          </h1>
        </div>
        <hr className="border-1 border-bottom border-gray-600 w-full mt-8 mb-10"></hr>
        <div className="project-container pt-20 grid grid-cols-2">
          <Link className="project-image relative grid grid-cols-2 hover:opacity-60">
            <img
              className="image grid-span-2 grid-start-1"
              src={DesignSystemsLight}
              alt="DesignSystemsLight"
            />
            <img
              className="image grid-span-2 grid-start-2 z-1 -ml-32 mt-36"
              src={DesignSystemsDark}
              alt="DesignSystemsDark"
            />
            <Link className="project-link m-auto my-auto opacity-0 text-gray-100 bg-gray-800 rounded p-2 px-4">
              view project
            </Link>
          </Link>
          <div className="project-info text-right">
            <h2 className="text-red-300 text-5xl font-bold">Design Systems</h2>
            <h3 className="text-gray-300 text-3xl font-bold mt-2">
              with Styled Components & Storybook
            </h3>
            <div className="bg-gray-800 text-right p-4 mt-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                facilisi consequat vestibulum accumsan vitae risus volutpat
                pharetra. Etiam urna, tortor enim volutpat cursus nullam augue
                ac. Aenean risus, purus nec massa vitae id at turpis nullam.
                Tincidunt ullamcorper ac vitae egestas lorem sit justo.
                Vestibulum, aliquam mauris turpis mi, feugiat.{" "}
              </p>
            </div>
            <ul className="flex row justify-end text-gray-300 mt-8 font-normal">
              <li>React</li>
              <li className="pl-6">Styled Components</li>
              <li className="pl-6">Storybook</li>
              <li className="pl-6">Figma</li>
            </ul>
            <div className="flex row justify-end mt-8 text-gray-300">
              <div className="icon-primary">
                <a href="https://github.com/Chrys-Nicolaides">
                  <FaGithub />
                </a>
              </div>
              <div className="icon-primary">
                <a href="https://codepen.io/Chrys-Nicolaides">
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
