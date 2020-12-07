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
      <nav className="w-full flex row justify-between items-center bg-gray-900 text-white">
        <h2>My Portfolio</h2>
        <ul className="flex row justify-end p-2">
          <Link className="py-4 px-4" href="link" to="/Home">Home</Link>
          <Link className="py-4 px-4" href="link" to="/About">About</Link>
          <Link className="py-4 px-4" href="link" to="/Projects">Projects</Link>
          <Link className="py-4 px-4" href="link" to="/Contact">Contact</Link>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    </Router>
  );
};

export default Navbar;
