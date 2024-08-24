import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-800 body-font bg-[#ecf4fb] flex items-center w-full min-h-screen py-16"> {/* Use min-h-screen and padding-top */}
      <div className="container mx-auto flex px-5 py-10 flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="flex flex-col md:items-start md:text-left text-center w-full md:w-1/2 lg:pr-24 md:pr-16 mb-10 md:mb-0">
          <p className="title-font text-2xl sm:text-3xl md:text-4xl font-serif font-normal">
            Hello, It's Me
          </p>
          <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 mt-2">
            Abhay Kumar
          </h1>
          <p className="text-lg sm:text-xl mt-4">And I'm a</p>
          <p className="leading-relaxed text-lg sm:text-xl font-medium">
            Frontend Developer
          </p>
          <p className="leading-relaxed text-base sm:text-lg mt-4">
            Aspiring frontend developer passionate about crafting engaging user experiences. Eager to learn and contribute to innovative web projects.
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="https://drive.google.com/file/d/1w8ADAasy1OS256_yPKnA03CNnJir5JSR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 lg:w-1/4">
          <img
            className="object-cover object-center rounded-full mx-auto border-4 border-yellow-900"
            alt="hero"
            src="/image/portfolio pic_processed.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
