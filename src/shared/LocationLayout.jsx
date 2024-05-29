import React from "react";
import LocationCard from "../shared/LocationCard";
import locationImage1 from "../assets/images/location1.jpg";
import locationImage2 from "../assets/images/location2.jpg";
import locationImage3 from "../assets/images/location3.jpg";

const locationsData = [
  {
    title: "Cambie",
    address: "752 West 12th Avenue, Vancouver BC V5Z 3X7",
    phone: "604-555-6262",
    email: "van-core-fitness-cambie@gmail.ca",
    position: { lat: 49.260660112107736, lng: -123.12194817369209 },
  },
  {
    title: "Kingsway",
    address: "1100 Kingsway, Burnaby BC V5H 2G2",
    phone: "604-123-4567",
    email: "van-core-fitness-kingsway@gmail.com",
    position: { lat: 49.229996901581096, lng: -123.00480310252945 },
  },
  {
    title: "Kitsilano",
    address: "2150 West Broadway, Vancouver BC V6K 4L9",
    phone: "604-321-7654",
    email: "van-core-fitness-kitsilano@gmail.com",
    position: { lat: 49.263799068796445, lng: -123.1540808332144 },
  },
];

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
            location={locationsData[0]}
          />
          <LocationCard
            image={locationImage2}
            imageAlt="Van Core Fitness Kingsway Location"
            title="Kingsway"
            location={locationsData[1]}
          />
          <LocationCard
            image={locationImage3}
            imageAlt="Van Core Fitness Kitsilano Location"
            title="Kitsilano"
            location={locationsData[2]}
          />
        </div>
      </div>
    </div>
  );
};

export default LocationLayout;
