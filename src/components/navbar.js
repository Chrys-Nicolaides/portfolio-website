import React from "react";
import { ReactComponent as CoralLogo } from "../images/coral-logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header>
      <nav className="fixed w-full flex row justify-between items-center bg-gray-800 text-gray-300 shadow-lg py-2 z-10">
        <div className="px-8">
          <CoralLogo />
        </div>
        <ul className="flex row justify-end p-2">
          <Link
            className="link-primary"
            to="Home"
            offset={-88}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            className="link-primary"
            to="About"
            offset={-88}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="link-primary"
            to="Projects"
            offset={-88}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="link-primary"
            to="Contact"
            offset={-88}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <Link
            className=" flex row items-center"
            to="/Resume"
            offset={-88}
            smooth={true}
            duration={500}
          >
            <div className="button-primary mx-6 px-4 py-2">Resume</div>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
