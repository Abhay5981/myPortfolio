import React from "react";

const Hero = () => {

const handleClick = () =>{
  return <link rel="import" href="https://drive.google.com/file/d/1xBGDK4ijDk36-1dcCUvVgD7gm5eQQ1Hu/view?usp=drive_link" />
  return 
}

  return (
    <>
      <section className="text-gray-600 body-font bg-slate-50 ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ml-12 font-serif ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <p className="title-font sm:text-4xl text:xl font-serif font-normal text-gray-700 ">
              Hello, It's Me
            </p>
            <br />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-950">
              <span>Abhay Kumar</span>
            </h1> 
            <p>And I'm a</p>
            <p className="mb-8 leading-relaxed text">Frontend Developer</p>
            <p className="mb-8 leading-relaxed">
              Aspiring frontend developer passionate about crafting engaging
              user experiences. Eager to learn and contribute to innovative web
              projects.
            </p>
            <div className="flex justify-center">
              <a href="https://drive.google.com/file/d/1w8ADAasy1OS256_yPKnA03CNnJir5JSR/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Download Resume
                </button>
              </a>
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-10 ">
            <img
              className="object-cover object-center rounded-full w-[65%] h-[65%]"
              alt="hero"
              src="/public/portfolio.png"
            />
          </div>
        </div>
      </section>
      <hr className="bold shadow-sm"/>
    </>
  );
};

export default Hero;
