import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo/Logo-Gray.png";
import { FiX } from "react-icons/fi";
import { TfiAlignRight } from "react-icons/tfi";

import ButtonComponent from "./ButtonComponent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClass =
    "block mt-6 lg:inline-block lg:mt-0 px-5 text-white hover:text-gray-400 mr-4";
  const activeLinkClass =
    "block mt-6 lg:inline-block lg:mt-0 px-5 text-amber-300 font-bold hover:text-gray-400 mr-4";

  return (
    <nav className="bg-dark-gray bg-opacity-70 mx-auto flex items-center justify-between flex-wrap py-4 px-10 lg:px-20 fixed w-full shadow-2xl z-50">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link to="/">
          <img src={Logo} alt="Vancore Fitness Logo" className="h-20" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center rounded text-white hover:text-gray-400 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={40} /> : <TfiAlignRight size={40} />}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center text-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="text-md lg:flex-grow">
          <Link
            to="/locations"
            className={
              location.pathname === "/locations" ? activeLinkClass : linkClass
            }
          >
            Locations
          </Link>
          <Link
            to="/classes"
            className={
              location.pathname === "/classes" ? activeLinkClass : linkClass
            }
          >
            Classes
          </Link>
          <Link
            to="/membership"
            className={
              location.pathname === "/membership" ? activeLinkClass : linkClass
            }
          >
            Membership
          </Link>
          <Link
            to="/about-us"
            className={
              location.pathname === "/about-us" ? activeLinkClass : linkClass
            }
          >
            About Us
          </Link>
          <Link
            to="/contact-us"
            className={
              location.pathname === "/contact-us" ? activeLinkClass : linkClass
            }
          >
            Contact Us
          </Link>
        </div>
        <div>
          <ButtonComponent variant="navbar" btnText="Join Now" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
