import React, { useState } from "react";
import LocationModal from "./LocationModal";

const LocationCard = ({ title, image, imageAlt, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="relative w-full h-60 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src={image}
          alt={imageAlt}
          className="object-cover h-full w-full"
        />
        <h3 className="absolute inset-0 flex items-center justify-center text-white font-anton text-4xl">
          {title}
        </h3>
      </div>
      <div className="text-center text-lg font-light">{location}</div>
      <button
        className="w-40 text-center text-black font-semibold rounded-full py-3 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 shadow-2xl bg-transparent border border-black hover:text-white hover:border-dark-blue"
        onClick={handleViewMore}
      >
        View More
      </button>
      <LocationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LocationCard;
