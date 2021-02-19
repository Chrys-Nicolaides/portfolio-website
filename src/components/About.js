import React from "react";

const About = () => {
  return (
    <div>
      <section className="px-44 py-8 text-white flex-row">
        <div className="flex row">
          <h1 className="text-red-300 text-3xl font-bold mr-6 flex items-end">
            01.
          </h1>
          <h1 className="text-gray-200 text-5xl font-bold  flex items-end">
            About Me
          </h1>
          {/* <hr className="pt-2 ml-14 border-1 border-gray-500 w-8/12 flex items-center"></hr> */}
        </div>
        <div className="grid grid-cols-2">
          <div className="text-justify">
            <p className="pt-10">
              I am a multi-disciplinary designer with a background in
              Architecture. I graduated with my Master’s Degree in Architecture
              in 2016 and have gained 6 years of experience working in the
              field.{" "}
              <p className="pt-4">
                Today, I am eager to transition into web development and focus
                not only web design but also building impactful and meaningful
                digital experiences for users. I have a passion for problem
                solving and turning complex problems into intuitive and
                straightforward solutions. While I have experience in design, I
                am a pragmatist and appreciate that UX/UI design and development
                are reliant on each other. I strive to grow in both areas in
                hopes of becoming a well rounded front end developer.
              </p>
            </p>
            <p className="pt-10 text-gray-300">
              These are the technologies I have been working with recently:
            </p>
            <ul className="pt-4 text-gray-300 grid grid-cols-2 font-normal">
              <li>* JavaScript (ES6+)</li>
              <li>* Figma</li>
              <li>* React</li>
              <li>* Adobe Illustrator</li>
              <li>* HTML & CSS</li>
              <li>* Adobe InDesign</li>
              <li>* Tailwind CSS</li>
            </ul>
          </div>
          <div className="bg-gray-700 mt-10 ml-20 mb-20 flex justify-center items-center">
            It's a Santhe
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
