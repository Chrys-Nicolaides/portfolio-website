import React from "react";

import ProjectOne from "../projects/ProjectOne";
import ProjectTwo from "../projects/ProjectTwo";

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
        <ProjectOne />
        <ProjectTwo />
      </section>
    </div>
  );
};

export default Projects;
