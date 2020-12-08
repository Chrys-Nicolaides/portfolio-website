import React from "react";

const Home = () => {
  return (
    <div>
      <section className="px-8 py-8">
        <h1 className="text-base">Hello! My name is</h1>
        <h2 className="text-6xl py-3">Chrys</h2>
        <h3 className="text-6xl text-gray-500">I like to create</h3>
        <p className="text-lg py-6 w-5/6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          quis condimentum ex, ut sodales libero. Nam tortor nisl, commodo
          vestibulum malesuada tincidunt, tempor vel mi. Vivamus non mi rhoncus,
          semper eros vel, consequat dolor. Pellentesque dignissim nunc ligula,
          quis porttitor quam porttitor et. Cras suscipit dapibus libero eget
          molestie.
        </p>
        <button>Let's connect</button>
      </section>
    </div>
  );
};

export default Home;
