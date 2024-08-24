import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#ecf4fb] flex items-center justify-center pt-16" // Added padding-top to ensure spacing from Hero
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-10">
        {/* Image Section */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex justify-center md:justify-start">
          <img
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full ring-4 ring-amber-950"
            src="/image/portfolio.png"
            alt="portfolio-img"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 px-5 md:px-10">
          <div className="font-serif text-xl text-slate-900">
            <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-xl text-center md:text-left mb-5">
              About Me
            </h1>
            <p className="mb-4">
              I'm a passionate Frontend Web Developer with a strong focus on creating responsive, user-friendly, and visually appealing websites. With a keen eye for detail and a deep understanding of modern web technologies, I enjoy transforming ideas into functional, dynamic web applications.
            </p>
            <p className="mb-4">
              I specialize in working with HTML, CSS, JavaScript, and React.js, and have experience using tools like Tailwind CSS and React Router to build seamless user interfaces. My goal is to continuously learn and implement the latest web development practices to deliver exceptional user experiences.
            </p>
            <p className="mb-4">
              In addition to my technical skills, I bring a creative mindset to my projects, ensuring that every website I build not only works well but also looks great. Whether it's crafting a smooth navigation experience or optimizing a site for mobile devices, I’m committed to delivering high-quality work that meets user needs and exceeds expectations.
            </p>
            <p>
              I'm excited about the opportunities to grow as a developer and contribute to projects that make a difference. Let's create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
