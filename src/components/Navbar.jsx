import React from "react";
import logo from "../assets/logo2.png";

export const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full bg-gradient-to-b from-blue-500 to-white shadow-lg">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-15 h-20 mr-2 ml-20" />
              <div className="text-white text-3xl font-thin tracking-wider"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
