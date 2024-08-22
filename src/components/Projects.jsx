import React from "react";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto py-10 bg-[#ecf4fb]">
        <div className="text-center p-4 font-serif font-bold text-2xl">
          <h2>Projects</h2>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap -m-4">
              {[
                {
                  title: "Password Generator",
                  image: "/image/PasswordGenerator.png",
                  liveUrl: "https://rpassgene.netlify.app",
                  repoUrl: "https://github.com/Abhay5981/Password_Generator",
                },
                {
                  title: "Age Calculator",
                  image: "/image/AgeCalculator.png",
                  liveUrl: "https://agecal1.netlify.app",
                  repoUrl:
                    "https://github.com/Abhay5981/Age-Calculator/tree/main/age%20calculator",
                },
                {
                  title: "Tic Tac Toe",
                  image: "/image/TicTacToe.png",
                  liveUrl: "https://aktictactoe-02.netlify.app",
                  repoUrl: "https://github.com/Abhay5981/Tic-Tac-Toe-Game",
                },
                {
                  title: "Rock Paper Scissors",
                  image: "/image/RockPaperScissors.png",
                  liveUrl:
                    "https://abhay5981.github.io/Rock-Paper-Scissors-Game/",
                  repoUrl:
                    "https://github.com/Abhay5981/Rock-Paper-Scissors-Game",
                },
              ].map((project, index) => (
                <div key={index} className="p-4 md:w-1/1 lg:w-1/2 h-auto">
                  <div className="relative h-full overflow-hidden rounded-lg shadow-lg group">
                    <img
                      alt={project.title}
                      className="object-cover object-center w-full h-full"
                      src={project.image}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                      <div className="flex gap-4 flex-col ">
                        <p className="font-serif font-bold text-xl text-yellow-300 mt-20 ">
                          {project.title}
                        </p>
                        <a
                          href={project.liveUrl}
                          className="bg-yellow-900 text-white px-4 py-2 rounded hover:bg-yellow-600 text-center w-24 m-auto"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live
                        </a>
                        <a
                          href={project.repoUrl}
                          className="bg-yellow-900 text-white px-4 py-2 rounded hover:bg-yellow-600 text-center w-24 m-auto"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Repo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
     
    </>
  );
};

export default Projects;
