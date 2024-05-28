import React from "react";
import LocationCard from "../shared/LocationCard";
import locationImage1 from "../assets/images/location1.jpg";
import locationImage2 from "../assets/images/location2.jpg";
import locationImage3 from "../assets/images/location3.jpg";

const LocationLayout = () => {
  return (
    <div>
      <div className="px-10 py-20 lg:p-40">
        <h2 className="font-anton text-center text-5xl text-black pb-20">
          Select your closest gym
        </h2>
        <div className="grid grid-rows-3 gap-10 md:grid-cols-3 md:grid-rows-1">
          <LocationCard
            image={locationImage1}
            imageAlt="Van Core Fitness Cambie Location"
            title="Cambie"
            location="752 West 12th Avenue, Vancouver BC V5Z 3X7"
          />
          <LocationCard
            image={locationImage2}
            imageAlt="Van Core Fitness Kingsway Location"
            title="Kingsway"
            location="1100 Kingsway, Burnaby BC V5H 2G2"
          />
          <LocationCard
            image={locationImage3}
            imageAlt="Van Core Fitness Kitsilano Location"
            title="Kitsilano"
            location="2150 West Broadway, Vancouver BC V6K 4L9"
          />
        </div>
      </div>
      {/* <LocationMap /> */}
    </div>
  );
};

export default LocationLayout;
