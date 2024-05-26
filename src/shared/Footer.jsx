import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../assets/logo/Logo-Gray.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col bg-dark-gray py-10 gap-6">
      <Link to="/">
        <img src={LogoFooter} alt="Van Core Fitness Logo" className="h-20" />
      </Link>
      <h3 className="font-anton text-2xl text-center text-white">
        Discover Your Strength.
        <br />
        Shape Your Story.
      </h3>
    </footer>
  );
};

export default Footer;
