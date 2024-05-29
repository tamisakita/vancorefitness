import React from "react";
import bannerImage from "../assets/images/about-image.jpg";

const AboutUs = () => {
  return (
    <div>
      <Banner
        title="BECOME A MEMBER"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
    </div>
  );
};

export default AboutUs;
