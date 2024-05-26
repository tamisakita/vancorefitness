import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Logo-Gray.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-dark-gray mx-auto flex items-center justify-between flex-wrap py-4 px-20 fixed w-full shadow-2xl">
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
          {isOpen ? (
            <FiX className="h-6 w-6" size={70} />
          ) : (
            <FiMenu className="h-6 w-6" size={70} />
          )}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center text-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="text-lg lg:flex-grow">
          <Link
            to="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            First Link
          </Link>
          <Link
            to="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Second Link
          </Link>
          <Link
            to="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Third Link
          </Link>
          <Link
            to="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Fourth Link
          </Link>
          <Link
            to="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Quinto Link
          </Link>
          <Link
            to="#"
            className="block mt-6 mb-10 lg:mb-0 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
          >
            Sexto Link
          </Link>
        </div>
        <div>
          <Link className="hidden lg:block inline-flex items-center bg-amber-500 border-0 rounded-full py-3 px-10 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
