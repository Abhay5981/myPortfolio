import React, { useState } from "react";
import { FaBuysellads } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu button

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-black dark:text-white body-font fixed top-0 left-0 w-full z-50 shadow-md font-serif">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 px-4 md:px-5 py-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <a className="flex items-center text-black dark:text-white  transition duration-300">
            <span className="w-6 h-6  font-bold  rounded-full p-1 hover:shadow-md hover:bg-yellow-900 justify-items-center">
              < FaBuysellads />
            </span>
            <span className="ml-3 text-lg md:text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition duration-300">
              Abhay Kumar
            </span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            className="ml-auto md:hidden text-black dark:text-white transition-transform transform hover:scale-110">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation links */}
          <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center font-bold ${isMobileMenuOpen ? "block" : "hidden"} md:flex transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-7 text-sm md:text-base">
              <li>
                <NavLink to="/" className="hover:text-yellow-400 dark:hover:text-yellow-300 hover:underline transition duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-yellow-400 dark:hover:text-yellow-300 hover:underline transition duration-300">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/skill" className="hover:text-yellow-400 dark:hover:text-yellow-300 hover:underline transition duration-300">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/skill" className="hover:text-yellow-400 dark:hover:text-yellow-300 hover:underline transition duration-300">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-yellow-400 dark:hover:text-yellow-300 hover:underline transition duration-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
