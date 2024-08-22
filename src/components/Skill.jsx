import React from 'react'

const Skill = () => {
  return (
    <>
      <div className="skill bg-[#ecf4fb] text-center  md:pt-10 h-[50vh]">
        <h1 className="font-serif font-semibold text-2xl mb-5">Skills</h1>
        <ul className="flex flex-wrap gap-4 justify-center p-8">
          <li className="bg-yellow-300 px-4 py-2 rounded">HTML</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">CSS</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">JavaScript</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">React</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Node.js</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">TypeScript</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Bootstrap</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Git</li>
          <li className="bg-yellow-300 px-4 py-2 rounded">Tailwind</li>
        </ul>
      </div>
     
    </>
  )
}

export default Skill;
