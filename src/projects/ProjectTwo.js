import React from "react";
import ErgoTimer from "../images/ErgoTimer.png";
import { FaGithub, FaDribbble } from "react-icons/fa";

const ProjectTwo = () => {
  return (
    <div>
      <div className="project-container-left pb-32 pt-60 grid grid-cols-2">
        <div className="project-info text-left">
          <h2 className="text-red-300 text-5xl font-bold">Ergo Timer</h2>
          <h3 className="text-gray-300 text-3xl font-bold mt-2">
            with CSS Variables & Animation
          </h3>
          <div className="bg-gray-800 text-left p-4 mt-12 mr-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              facilisi consequat vestibulum accumsan vitae risus volutpat
              pharetra. Etiam urna, tortor enim volutpat cursus nullam augue ac.
              Aenean risus, purus nec massa vitae id at turpis nullam. Tincidunt
              ullamcorper ac vitae egestas lorem sit justo. Vestibulum, aliquam
              mauris turpis mi, feugiat.
            </p>
          </div>
          <ul className="flex row justify-start text-gray-300 mt-8 font-normal">
            <li>React</li>
            <li className="pl-6">CSS Variables</li>
            <li className="pl-6">CSS Animation</li>
            <li className="pl-6">Figma</li>
          </ul>
          <div className="flex row justify-start mt-8 text-gray-300">
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
        <div>
          <a className="hover-wrapper relative" href="https://www.google.com">
            <div className="button-wrapper absolute inset-0 bg-red-500 ">
              <div className="button-secondary">view project</div>
            </div>
            <img className="image" src={ErgoTimer} alt="ErgoTimer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
