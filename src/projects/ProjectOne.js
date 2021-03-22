import React from "react";

import DesignSystemsDark from "../images/DesignSystemsDark.png";
import DesignSystemsLight from "../images/DesignSystemsLight.png";

import { FaGithub, FaDribbble } from "react-icons/fa";

const ProjectOne = () => {
  return (
    <div>
      <div className="project-container-right pt-32 grid grid-cols-2 gap-x-8">
        <a
          className="relative grid grid-cols-2 hover-wrapper"
          href="https://www.google.com"
        >
          <div className="grid-span-2 grid-start -mr-32">
            <img
              className="image"
              src={DesignSystemsLight}
              alt="DesignSystemsLight"
            />
          </div>
          <div className="grid-span-2 grid-start-2 z-1 -ml-32 mt-36">
            <img
              className="image"
              src={DesignSystemsDark}
              alt="DesignSystemsDark"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center button-wrapper">
            <a className="button-secondary" href="https://www.google.com">
              view project
            </a>
          </div>
        </a>
        <div className="project-info text-right">
          <h2 className="text-red-300 text-5xl font-bold">Design Systems</h2>
          <h3 className="text-gray-200 text-3xl font-bold mt-2">
            with Styled Components & Storybook
          </h3>
          <div className="bg-gray-800 text-right p-4 mt-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              facilisi consequat vestibulum accumsan vitae risus volutpat
              pharetra. Etiam urna, tortor enim volutpat cursus nullam augue ac.
              Aenean risus, purus nec massa vitae id at turpis nullam. Tincidunt
              ullamcorper ac vitae egestas lorem sit justo. Vestibulum, aliquam
              mauris turpis mi, feugiat.{" "}
            </p>
          </div>
          <ul className="flex row justify-end text-gray-400 mt-6 font-normal">
            <li>React</li>
            <li className="pl-6">Styled Components</li>
            <li className="pl-6">Storybook</li>
            <li className="pl-6">Figma</li>
          </ul>
          <div className="flex row justify-end mt-6 text-gray-300">
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
    </div>
  );
};

export default ProjectOne;
