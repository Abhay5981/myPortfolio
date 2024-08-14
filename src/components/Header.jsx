import React from "react";
import { TfiUser } from "react-icons/tfi";
import { IoToggle } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-slate-300">
          <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
            <span className="ml-10 w-3">
              <TfiUser />
            </span>
            <span className="ml-3 text-xl">Abhay Kumar</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About</a>
            <a className="mr-5 hover:text-gray-900">Skill</a>
            <a className="mr-5 hover:text-gray-900">Projects</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <span className="ml-5">
            <IoToggle className="text-2xl" />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
