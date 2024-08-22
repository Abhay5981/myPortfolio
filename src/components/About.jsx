import React from "react";

const About = () => {
  return (
    <>
      <div className="aboutContainer flex flex-col md:flex-row items-center md:items-start pt-15 md:pt-20">
        <div className="m-5 md:w-1/3  flex justify-center md:justify-start">
          <img
            className=" md:w-full md:h-auto object-cover rounded-full ring-4 ring-amber-950 ring-offset-0 "
            src="/public/image/portfolio.png"
            alt="portfolio-img"
          />
        </div>
        <div className="w-full bg-slate-50 h-auto relative shrink-0 md:w-2/3">
          <div className="font-serif text-xl text-slate-900 py-15 px-5 md:px-10 my-6">
            <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl text-center md:text-left p-5">
              About Me
            </h1>
            <p className="mb-4">
              I'm a passionate Frontend Web Developer with a strong focus on
              creating responsive, user-friendly, and visually appealing
              websites. With a keen eye for detail and a deep understanding of
              modern web technologies, I enjoy transforming ideas into
              functional, dynamic web applications.
            </p>
            <p className="mb-4">
              I specialize in working with HTML, CSS, JavaScript, and React.js,
              and have experience using tools like Tailwind CSS and React Router
              to build seamless user interfaces. My goal is to continuously
              learn and implement the latest web development practices to
              deliver exceptional user experiences.
            </p>
            <p className="mb-4">
              In addition to my technical skills, I bring a creative mindset to
              my projects, ensuring that every website I build not only works
              well but also looks great. Whether it's crafting a smooth
              navigation experience or optimizing a site for mobile devices, I’m
              committed to delivering high-quality work that meets user needs
              and exceeds expectations.
            </p>
            <p>
              I'm excited about the opportunities to grow as a developer and
              contribute to projects that make a difference. Let's create
              something amazing together!
            </p>
          </div>
        </div>
      </div>
      <hr className="bold" />
    </>
  );
};

export default About;
