import React from "react";
import ButtonComponent from "./ButtonComponent";

const InfoLeft = ({ image, imageAlt, title, text, btnVariant, btnText }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 my-40 lg:mx-20 lg:my-40 gap-10">
      <div className="flex flex-col gap-10 text-center items-center lg:text-right lg:items-end lg:pl-40">
        <h2 className="font-anton text-3xl lg:text-4xl">{title}</h2>
        <p className="text-lg font-light lg:text-xl">{text}</p>
        <ButtonComponent variant={btnVariant} btnText={btnText} />
      </div>
      <div className="row-start-1 lg:col-start-2">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default InfoLeft;
