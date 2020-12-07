import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full flex row justify-between items-center bg-gray-900 text-white py-4 px-4">
        <h2>My Portfolio</h2>
        <ul className="flex row justify-end">
          <li className="nav-item">
            <a href="#" className="py-4 px-4">
              <span className="link-text">About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="py-2 px-4">
              <span className="link-text">Work</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="py-2 px-4">
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
