import React, { useState } from "react";

const CardLayout = ({ bgImage, title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col relative items-center justify-center gap-6 bg-dark-gray p-10 border shadow-2xl h-[60vh]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && (
          <div className="absolute inset-0 bg-black opacity-60"></div>
        )}
        {isHovered && (
          <div className="text-center text-white z-20">
            <p className="">{text}</p>
          </div>
        )}
      </div>
      <h3 className="font-anton text-4xl text-center pt-10">{title}</h3>
    </div>
  );
};

export default CardLayout;
