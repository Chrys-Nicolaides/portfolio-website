import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

import { Element } from "react-scroll";

function App() {
  return (
    <div className="App bg-gradient-to-br from-gray-800 to-gray-900">
      <Navbar />
      <div style={{ height: "88px" }} />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
