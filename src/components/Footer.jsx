import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-blue-400 fixed bottom-0 left-0 w-full">
        <div className="container px-5 py-4 mx-auto flex flex-col sm:flex-row items-center">
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-bold">
            © copyright @ 2024 by -Abhay Kumar 
           
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3 z-50">
            <a className="text-gray-500 hover:text-blue-700" href="#">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a className="text-gray-500 hover:text-red-500" href="#">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a className="text-gray-500 hover:text-pink-500" href="#">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a className="text-gray-500 hover:text-blue-900" href="#">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer;
