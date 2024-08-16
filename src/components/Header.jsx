import React, { useState, useEffect } from "react";
import { TfiUser } from "react-icons/tfi";
import { IoSunny, IoMoon } from "react-icons/io5"; // Import icons for sun and moon
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <header className="text-black dark:text-white body-font w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-400 dark:bg-gray-800">
          <a className="flex title-font font-medium items-center text-black dark:text-white mb-4 md:mb-0">
            <span className="ml-10 w-3 font-bold">
              <TfiUser />
            </span>
            <span className="ml-3 text-xl font-serif font-bold">Abhay Kumar</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
            <ul className="flex gap-7">
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
          <button onClick={toggleTheme} className="ml-5 text-2xl">
            {darkMode ? <IoSunny /> : <IoMoon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
