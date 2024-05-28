import React from "react";

const AmenitiesCards = ({ image, title }) => {
  return (
    <div
      className="w-60 h-60 relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h3 className="absolute font-anton text-white text-xl lg:text-3xl text-center">
        {title}
      </h3>
    </div>
  );
};

export default AmenitiesCards;
