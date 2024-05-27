import React from "react";

const TestimonialsCard = ({ image, imageAlt, text, name }) => {
  return (
    <>
      <div className="bg-white p-6 shadow-xl border border-amber-500">
        <div className="flex justify-center pb-10">
          <img src={image} alt={imageAlt} className="rounded-full h-40" />
        </div>
        <div className="text-center">
          <p className="pb-5">{text}</p>
          <h4 className="font-semibold text-xl">{name}</h4>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
