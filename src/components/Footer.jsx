import React from 'react'
import {FaFacebook, FaInstagram,  FaTwitter, FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <>
      <footer className=" text-gray-600 body-font bg-blue-400 fixed bottom-0 left-0 w-full h-20">
        
        
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"></a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© copyright—
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@2024 by Abhay Kumar</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500 hover:bg-blue-700">
        <FaFacebook className="w-5 h-5" />
      </a>
      <a className="ml-3 text-gray-500 hover:bg-red-700">
        <FaTwitter className="w-5 h-5" />
      </a>
      <a className="ml-3 text-gray-500 hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045])">
        <FaInstagram/>
      </a>
      <a className="ml-3 text-gray-500 hover:bg-blue-950">
        <FaLinkedinIn/>
      </a>
    </span>
  </div>
</footer>
    </>
  )
}

export default Footer;
