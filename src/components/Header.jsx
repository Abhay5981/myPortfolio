import React, { useContext } from "react";
import { TfiUser } from "react-icons/tfi";
import { NavLink } from "react-router-dom";


const Header = () => {
  

  return (
    <header className="text-black dark:text-white body-font w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 items-center bg-[#65789f] dark:bg-gray-800 w-full">
        <a className="flex title-font font-medium items-center text-black dark:text-white mb-4 md:mb-0">
          <span className="ml-2 md:ml-10 w-6 h-6 font-bold border-4">
            <TfiUser />
          </span>
          <span className="ml-3 text-lg md:text-xl font-serif font-bold">Abhay Kumar</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
          <ul className="flex gap-4 md:gap-7 text-sm md:text-base">
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
    </header>
  );
};

export default Header;
