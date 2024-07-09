import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "../shared/Banner";
import CardLayout from "../shared/CardLayout";
import ButtonComponent from "../shared/ButtonComponent";

import bannerImage from "../assets/images/trainning.jpg";

import { classDetails } from "../data/classDetailsData";

const Classes = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Banner
        title="DISCOVER OUR CLASSES"
        btnText="Join Now"
        variant="default"
        backgroundImage={bannerImage}
      />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10 my-20 md:m-20 gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {classDetails.map((detail, index) => (
          <CardLayout
            key={index}
            bgImage={detail.bgImage}
            title={detail.title}
            text={detail.text}
          />
        ))}
      </div>
      <div className="flex justify-center mb-20 lg:mb-40">
        <ButtonComponent variant="orange" btnText="Join Now" />
      </div>
    </div>
  );
};

export default Classes;
