import React from "react";
import { FaGithub, FaCodepen, FaLinkedinIn, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-12 flex row justify-between fixed bottom-0 items-center bg-gray-800 text-gray-300 px-6 py-4">
        <div className="flex row justify-start">
          <div className="icon-primary">
            <a href="https://github.com/Chrys-Nicolaides">
              <FaGithub />
            </a>
          </div>

          <div className="icon-primary">
            <a href="https://www.linkedin.com/in/chrysanthe-nicolaides-341877136/">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="icon-primary">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <FaCodepen />
            </a>
          </div>

          <div className="icon-primary">
            <a href="https://codepen.io/Chrys-Nicolaides">
              <FaDribbble />
            </a>
          </div>
        </div>
        <div className="flex">
          <a
            className="link-primary flex row justify-end text-xs font-normal tracking-wider"
            href="https://www.google.com"
            to="/"
          >
            nicolaides.chrysanthe@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
