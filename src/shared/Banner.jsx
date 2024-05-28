import React from "react";
import ButtonComponent from "./ButtonComponent";

const Banner = ({ title, btnText, backgroundImage }) => {
  return (
    <div
      className="h-screen bg-black flex justify-center items-center flex-col px-10 lg:px-20 gap-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-10 lg:px-20 gap-10 text-white pt-20">
        <h1 className="uppercase font-anton text-6xl text-center">{title}</h1>
        <ButtonComponent btnText={btnText} variant="default" />
      </div>

      <div className="absolute bottom-10 flex justify-center items-center">
        <div class="relative w-[24px] h-[10vh] bottom-10">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
          <span class="text">Scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
