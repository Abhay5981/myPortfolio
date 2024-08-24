import React, { useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu button

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="text-black dark:text-white body-font fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="bg-[#65789f] px-4 md:px-5 py-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <a className="flex items-center text-black dark:text-white">
            <span className="w-6 h-6 font-bold border-4">
              <TfiUser />
            </span>
            <span className="ml-3 text-lg md:text-xl font-serif font-bold">
              Abhay Kumar
            </span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu} 
            className="ml-auto md:hidden text-black dark:text-white">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation links */}
          <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center font-bold ${isMobileMenuOpen ? "block" : "hidden"} md:flex`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-7 text-sm md:text-base">
              <li>
                <NavLink to="/" className="hover:text-yellow-400 dark:hover:text-yellow-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-yellow-400 dark:hover:text-yellow-300">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/skill" className="hover:text-yellow-400 dark:hover:text-yellow-300">
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/project" className="hover:text-yellow-400 dark:hover:text-yellow-300">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-yellow-400 dark:hover:text-yellow-300">
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
