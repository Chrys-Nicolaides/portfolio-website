import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <nav className="w-full flex row justify-between items-center bg-gray-800 text-gray-300 shadow-xl">
            <h2 className="px-4">My Logo</h2>
            <ul className="flex row justify-end p-2">
              <Link className="py-4 px-4" href="link" to="/">
                Home
              </Link>
              <Link className="py-4 px-4" href="link" to="/About">
                About
              </Link>
              <Link className="py-4 px-4" href="link" to="/Projects">
                Projects
              </Link>
              <Link className="py-4 px-4" href="link" to="/Contact">
                Contact
              </Link>
              <Link>
                <button className="button-primary">Resume</button>
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
