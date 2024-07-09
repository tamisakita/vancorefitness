import React from "react";
import bannerImage from "../assets/images/location-image.jpg";
import Banner from "../shared/Banner";
import LocationLayout from "../shared/LocationLayout";
import AmenitiesCards from "../shared/AmenitiesCards";
import { AMENITIES } from "../data/amenitiesData";

const Locations = () => {
  return (
    <div>
      <Banner
        title="FIND YOUR CLUB"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <LocationLayout />
      <div className="px-10 py-20 lg:p-40 bg-neutral-300 opacity-90">
        <h2 className="font-anton text-center text-5xl text-black pb-20">
          Our Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          {AMENITIES.map((amenity, index) => (
            <AmenitiesCards
              key={index}
              image={amenity.image}
              title={amenity.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
