import React, { useRef, useState } from "react";

const FlexBoxWithImage = ({ ace, head, title, imageUrl, arrow, msg }) => {
  const nextBoxRef = useRef(null);
  const [isArrowHovered, setIsArrowHovered] = useState(false);

  const handleArrowClick = () => {
    // Scroll to the next box when the arrow is clicked
    if (nextBoxRef.current) {
      nextBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArrowHover = () => {
    setIsArrowHovered(!isArrowHovered);
  };

  return (
    <div className="w-full overflow-hidden ml-4 pr-8 mb-4">
      <div className="flex border p-5 py-10 bg-gradient-to-br from-white via-gray-200 to-gray-300 shadow-md">
        <div className="flex-1 relative z-10 pt-16">
          <div className="mb-2 mt-24 ml-64">
            <span className="bullet text-green-600 text-2xl text-center pr-2 px-1 py-1">
              &bull;
            </span>
            <span className="text-xl bg-customGreen text-black font-medium px-2 py-2 rounded shadow-md">
              {head}
            </span>
          </div>
          <h1
            className="text-7xl text-green-700 font-semibold mb-2 pl-10 pt-4 ml-56 transform transition-transform hover:scale-105"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            {title}
          </h1>
          <div className="flex items-center space-x-4 pt-20 ml-56 pl-10">
            <button
              className={`text-white text-2xl bg-green-700 rounded-md px-4 py-2 ${
                isArrowHovered ? "hover:bg-green-500" : ""
              }`}
              onClick={handleArrowClick}
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowHover}
            >
              Click here >
            </button>
          </div>

          <div className="flex items-center ml-10 pl-10 -mt-10">
            <img
              src={ace}
              style={{ transform: "rotate(-5deg)" }}
              className="w-full h-auto ml-96 transform transition-transform hover:scale-105"
              alt="Ace"
            />
          </div>

          <div className="flex items-center -mt-0 pl-10">
            <img
              src={arrow}
              className={`w-8 ml-52 mt-10 text-green-700 transform transition-transform hover:scale-105 h-auto cursor-pointer ${
                isArrowHovered ? "text-green-600" : ""
              }`}
              alt=""
              onClick={handleArrowClick}
              onMouseEnter={handleArrowHover}
              onMouseLeave={handleArrowHover}
            />
          </div>
          <div className="flex items-center mt-20 text-thin tracking-wider text-sky-600 ml-56 pl-10 pb-4">
            <h1>{msg}</h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-96 h-96 mt-48 md:order-10 mr-72">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-full mr-10 transform transition-transform hover:scale-105"
            style={{
              transform: "",
              boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.3)",
              borderRadius: "50%", // Added border-radius for a smoother appearance
            }}
          />
        </div>
      </div>
      <div className="flex-shrink-0 w-full" ref={nextBoxRef}></div>
    </div>
  );
};

export default FlexBoxWithImage;
