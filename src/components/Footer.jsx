import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#65789f] w-full">
        <div className="container px-5 py-4 mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Copyright Text */}
          <p className="text-sm text-black font-bold text-center sm:text-left mb-4 sm:mb-0">
            © copyright @ 2024 by - Abhay Kumar
          </p>
          
          {/* Social Media Icons */}
          <span className="inline-flex justify-center sm:justify-start gap-3 ">
            <a className="text-gray-700 hover:text-blue-700" href="#">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a className="text-gray-700 hover:text-blue-500" href="#">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a className="text-gray-700 hover:text-pink-500" href="#">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a className="text-gray-700 hover:text-blue-900" href="#">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
