import React from "react";
import bannerImage from "../assets/images/location-image.jpg";
import Banner from "../shared/Banner";
import LocationLayout from "../shared/LocationLayout";
import AmenitiesCards from "../shared/AmenitiesCards";
import img1 from "../assets/images/lockers.jpg";
import img2 from "../assets/images/hydro.jpg";
import img3 from "../assets/images/stretch-zone.jpg";
import img4 from "../assets/images/trainning.jpg";
import img5 from "../assets/images/shower.jpg";
import img6 from "../assets/images/personal-trainer.jpg";
import img7 from "../assets/images/class-studios.jpg";
import img8 from "../assets/images/womans-only.jpg";

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
      <div className="px-10 py-20 lg:p-40 bg-neutral-300	opacity-90">
        <h2 className="font-anton text-center text-5xl text-black pb-20">
          Our Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          <AmenitiesCards image={img1} title="Lockers" />
          <AmenitiesCards image={img2} title="Hydro Massage" />
          <AmenitiesCards image={img3} title="Stretch Zone" />
          <AmenitiesCards image={img4} title="Trainning" />
          <AmenitiesCards image={img5} title="Showers" />
          <AmenitiesCards image={img6} title="Personal Trainer Zone" />
          <AmenitiesCards image={img7} title="Class Studios" />
          <AmenitiesCards image={img8} title="Womens Only Area" />
        </div>
      </div>
    </div>
  );
};

export default Locations;
