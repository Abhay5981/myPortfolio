import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-slate-50 pt-15 md:pt-20 h-[100vh]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center font-serif">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="title-font sm:text-4xl text-2xl font-serif font-normal text-gray-700">
              Hello, It's Me
            </p>
            <br />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-950">
              <span>Abhay Kumar</span>
            </h1>
            <p className="text-lg sm:text-xl">And I'm a</p>
            <p className="mb-8 leading-relaxed text-lg sm:text-xl">
              Frontend Developer
            </p>
            <p className="mb-8 leading-relaxed text-base sm:text-lg">
              Aspiring frontend developer passionate about crafting engaging
              user experiences. Eager to learn and contribute to innovative web
              projects.
            </p>
            <div className="flex justify-center">
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full w-[80%] md:w-[65%] h-[80%] md:h-[65%] mx-auto md:mx-0"
              alt="hero"
              src="/public/portfolio.png"
            />
          </div>
        </div>
      </section>
      <hr className="bold shadow-sm" />
    </>
  );
};

export default Hero;
