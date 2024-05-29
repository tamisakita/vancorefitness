import React from "react";

const SectionLayout = ({ title, bgColor, text, children }) => {
  const containerStyle = `flex flex-col items-center px-10 py-20 lg:p-40 ${bgColor} opacity-90`;
  return (
    <div className={containerStyle}>
      <h2 className="font-anton text-center text-4xl lg:text-5xl text-black pb-10 lg:leading-normal">
        {title}
      </h2>
      <p className="text-center text-xl pb-20 lg:px-20">{text}</p>
      {children}
    </div>
  );
};

export default SectionLayout;
