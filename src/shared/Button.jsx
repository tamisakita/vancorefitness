import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnText, bgColor, visible }) => {
  const style = `${visible} lg:block inline-flex items-center ${bgColor} border-0 rounded-full py-3 px-10 text-white text-semibold hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 shadow-2xl`;
  return <Link className={style}>{btnText}</Link>;
};

export default Button;
