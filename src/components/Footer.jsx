import React from "react";
import logo from "../assets/logo2.png";

export const Footer = () => {
  const textColorStyle = { color: "rgb(12, 122, 104)" };
  return (
    <div className=" w-full fixed bottom-0 ">
      <div className="bg-gray-200 py-2 mt-5 bottom-0 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-15 h-20 ml-20" />
          </div>
          <ul className="flex space-x-10 mt-4">
            <li>
              <a href="/" className="text-sky-700 hover:underline">
                Document Management System
              </a>
            </li>
            <li>
              <a href="/" className="text-sky-700 hover:underline">
                OMS Application
              </a>
            </li>
            <li>
              <a href="/" className="text-sky-700 hover:underline">
                Decision Support Visualization
              </a>
            </li>
            <li>
              <a href="/" className="text-sky-700 hover:underline">
                OMS Buzz
              </a>
            </li>
            <li>
              <a href="/" className="text-sky-700 hover:underline">
                Wind Chime
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
