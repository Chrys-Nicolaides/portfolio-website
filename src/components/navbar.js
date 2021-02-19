import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactComponent as CoralLogo } from "../images/coral-logo.svg";

import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <Router>
      <div>
        <header>
          <nav className="w-full flex row justify-between items-center bg-gray-800 text-gray-300 shadow-lg py-2">
            <div className="px-8">
              <CoralLogo />
            </div>
            <ul className="flex row justify-end p-2">
              <Link className="link-primary" href="link" to="/">
                Home
              </Link>
              <Link className="link-primary" href="link" to="/About">
                About
              </Link>
              <Link className="link-primary" href="link" to="/Projects">
                Projects
              </Link>
              <Link className="link-primary" href="link" to="/Contact">
                Contact
              </Link>
              <Link className=" flex row items-center">
                <button className="button-primary mx-6 px-4 py-2">
                  Resume
                </button>
              </Link>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Projects">
            <Projects />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Navbar;
