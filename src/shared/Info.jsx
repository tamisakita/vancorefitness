import React from "react";
import ButtonComponent from "./ButtonComponent";

const Info = ({ image, imageAlt, title, text, btnVariant, btnText }) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 mx-10 my-20 lg:mx-20 lg:my-40 gap-10"
      data-aos="fade-down-right"
      data-aos-duration="1000"
    >
      <div>
        <img src={image} alt={imageAlt} />
      </div>
      <div className="flex flex-col gap-10 text-center items-center lg:text-left lg:items-start lg:pr-40">
        <h2 className="font-anton text-3xl lg:text-4xl">{title}</h2>
        <p className="text-lg font-light lg:text-xl">{text}</p>
        <ButtonComponent variant={btnVariant} btnText={btnText} />
      </div>
    </div>
  );
};

export default Info;
