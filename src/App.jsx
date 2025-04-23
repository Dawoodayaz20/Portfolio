import React from 'react'
import { FaGithub } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import './App.css'

class App extends React.Component {
  constructor(){
    super()

  }

  render(){
    return (
            <div className=" text-orange-950 font-sans">
      <header className="fixed top-0 left-0 w-full px-[10%] py-5  flex justify-between items-center z-50  bg-yellow-100">
        <a href="#" className="text-[25px] font-bold text-[#bc6c25] font-sans">Portfolio.</a>
        <nav className="flex space-x-8 text-[18px] font-semibold">
          <a href="#home" className="hover:text-[#dda15e]">Home</a>
          <a href="#about" className="hover:text-[#dda15e]">About</a>
          <a href="#edu-sect" className="hover:text-[#dda15e]">Education</a>
          <a href="#skills" className="hover:text-[#dda15e]">Skills</a>
          <a href="#projects" className="hover:text-[#dda15e]">Projects</a>
          <a href="#contact" className="hover:text-[#dda15e]">Contact</a>
        </nav>
      </header>

      <section id="home" className="flex justify-between items-center px-[10%] py-[10%]">
        <div className="max-w-[600px]">
          <h1 className="text-[56px] font-bold leading-tight">Hey there! I am Dawood Ayaz</h1>
          <h3 className="text-[32px] font-bold text-[#ca6702] leading-tight">Frontend Developer</h3>
          <div className="flex space-x-4 mt-10">
            <a href="mailto:dawoodayaz18@gmail.com" className="px-6 py-3 bg-[#ca6702] text-orange-950 font-bold text-lg rounded-lg hover:bg-[#ca6702] hover:text-white border border-[#ca6702] transition-all">Contact me</a>
            <a href="http://linkedin.com/in/choudhry-dawood-ayaz-b6560b317" className="px-6 py-3 font-bold text-lg border border-[#ca6702] text-orange-950 rounded-lg hover:bg-[#ca6702] hover:text-white transition-all">My Linkedin</a>
          </div>
        </div>
        <img className="rounded-full w-[30%] h-[65%] object-cover clip-path-circle" src="CV pic.jpg" alt="Portfolio" />
      </section>

      <section id="about" className="flex flex-col items-center gap-8 pb-12">
        <h2 className="text-4xl text-center">About <span className="text-[#ca6702]">Me</span></h2>
        <div className="relative w-[25rem] h-[25rem] flex justify-center items-center hover:border-black">
          <img src="Portfolio Pic 0.jpg" className="w-[20rem] h-[20rem] object-cover rounded-full" alt="About" />
          <span className="absolute top-0 left-0 w-full h-full rounded-full border-[0.2rem] border-[#ca6702] animate-spin-slow"></span>
        </div>
        <h3 className="text-2xl">Front-End Developer</h3>
        <p className="text-[1.5rem] text-center mx-8 font-sans text-orange-950">
          I'm Dawood Ayaz, a passionate Front-end Web Developer with over 2 years of experience crafting sleek and responsive web applications. I specialize in turning ideas into clean, user-friendly interfaces using React, JavaScript, and Tailwind CSS.<br />
          I'm also diving deep into the world of Agentic AI Engineering, exploring how intelligent systems can enhance the web.
        </p>
      </section>

      <section id="edu-sect" className="text-center px-4">
        <p className="text-[1.5rem] text-[#ca6702] my-6">Explore</p>
        <h1 className="text-4xl mb-8">My Education <span className="text-[#ca6702]">Journey</span></h1>
        {[
          { title: "Matriculate in Computer Science (Matric)", duration: "(2019-2021)" },
          { title: "Intermediate in Computer Science (ICS)", duration: "(2022-2024)" },
          { title: "Bachelor in Computer Science (BSCS)", duration: "Continuing (2024-2028)" },
          { title: "Cloud Applied Generative AI Engineering (PIAIC)", duration: "Continuing (2024-2025)" },
        ].map((edu, idx) => (
          <div key={idx} className="my-4 flex justify-center">
            <div className="border-2 border-[#ca6702] rounded-2xl p-8 max-w-xl text-center hover:text-[#ca6702] transition-all">
              <h3 className="text-xl font-bold">{edu.title}</h3>
              <p>{edu.duration}</p>
            </div>
          </div>
        ))}
      </section>
        
      <section id='skills' className='mt-20 text-center justify-center'>
        <h1 className='text-4xl my-12'>My Skills</h1>
          <div className='justify-center text-center border-2 border-[#ca6702] rounded-lg mx-20'>
            <div className="flex justify-center">
              <div className="mb-6 w-3/5">
                <p className="text-lg font-semibold">REACT JS</p>
                <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                  <div className="bg-orange-950 h-full w-[60%] hover:animate-pulse"></div>
                </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mb-6 w-3/5">
              <p className="text-lg font-semibold">Tailwind CSS</p>
              <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                <div className="bg-orange-950 h-full w-[90%] hover:animate-pulse"></div>
              </div>
          </div>
        </div>

        <div className="flex justify-center">
            <div className="mb-6 w-3/5">
              <p className="text-lg font-semibold">JavaScript</p>
              <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                <div className="bg-orange-950 h-full w-[70%] hover:animate-pulse"></div>
              </div>
          </div>
        </div>

        <div className="flex justify-center">
            <div className="mb-6 w-3/5">
              <p className="text-lg font-semibold">HTML</p>
              <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                <div className="bg-orange-950 h-full w-[95%] hover:animate-pulse"></div>
              </div>
          </div>
        </div>

        <div className="flex justify-center">
            <div className="mb-6 w-3/5">
              <p className="text-lg font-semibold">CSS</p>
              <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                <div className="bg-orange-950 h-full w-[95%] hover:animate-pulse"></div>
              </div>
          </div>
        </div>

        <div className="flex justify-center">
            <div className="mb-6 w-3/5">
              <p className="text-lg font-semibold">Python</p>
              <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                <div className="bg-orange-950 h-full w-[70%] hover:animate-pulse"></div>
              </div>
          </div>
        </div>

          <div className="flex justify-center">
            <div className="mb-6 w-3/5">
              <p className="text-lg font-semibold">FastApi</p>
              <div className=" bg-[#ca6702] h-4 rounded-full overflow-hidden justify-center">
                <div className="bg-orange-950 h-full w-[50%] hover:animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="projects" className="text-center py-10">
        <h1 className="text-4xl mb-8">My Projects</h1>
        {[
          { title: "Restaurant Website", link:"https://dawoodayaz20.github.io/Buns_and_Burger/index.html", Tech_Stack: "HTML, JavaScript, CSS"},
          { title: "Restaurant Website in React with Chatbot", link:"https://buns-and-burger-in-react.vercel.app/", Tech_Stack: "React, TailwindCSS, FastApi, Python, CrewAi"},
          { title: "Restaurant Customer Support Ai Agent", link:"https://customersupportagent-production.up.railway.app/", Tech_Stack: "React, TailwindCSS, FastApi, Python, CrewAi"},
          { title: "Travel Planning Ai Agent", link:"https://github.com/Dawoodayaz20/Travel_Planner.git", Tech_Stack: "Streamlit, Python, CrewAi"},
          { title: "Blog Writing Ai Agent", link:"https://github.com/Dawoodayaz20/Streamlit_blog_writer.git", Tech_Stack: "Streamlit, Python, CrewAi"}
        ].map((pro,lin) => (
        <div key={lin} className='my-4 flex justify-center'>  
        <div className="border-2 border-[#ca6702] rounded-2xl p-8 w-80 text-center hover:text-[#ca6702] transition-all">
          <p className="text-2xl my-4">{pro.title}</p>
          <a href={pro.link} className="px-6 py-2 bg-[#ca6702] text-white rounded-lg  border border-orange-950 transition-all">View Project</a>
          <p className='mt-8 text-yellow-900'><b>Tech Stack: </b>{pro.Tech_Stack}</p>
        </div>
        </div>
      ))}
      </section>

      <section id="contact" className="flex flex-col items-center justify-center h-[70vh] text-center">
        <p className="text-[1.4rem]">Get in Touch<br />To collaborate or for any other service, I'm open to opportunities.</p>
        <h1 className="pt-8 text-[1.7rem]">Contact Me</h1>
        <div className="flex items-center gap-6 border border-[#ca6702] p-6 mt-6 rounded-2xl"> 
            <MdEmail size={28} />
          <a onClick={() => window.location.href = 'mailto:dawoodayaz18@gmail.com'}>dawoodayaz18@gmail.com</a>
          <FaLinkedin size={28} />
          <a href="http://linkedin.com/in/choudhry-dawood-ayaz-b6560b317">LinkedIn</a>
        </div>
      </section>

      <footer className="text-center py-8 bg-yellow-100">
        <div className="flex justify-center gap-16 mb-4">
          <a className="cursor-pointer w-6 h-6" onClick={() => window.location.href = '//github.com/Dawoodayaz20'}> 
            <FaGithub size={35} />
          </a>
          <a className="cursor-pointer w-6 h-6" onClick={() => window.location.href = '//linkedin.com/in/choudhry-dawood-ayaz-b6560b317'}> 
            <FaLinkedin size={35} />
          </a>
          <a className="cursor-pointer w-6 h-6" onClick={() => window.location.href = 'mailto:dawoodayaz18@gmail.com'}> 
            <MdEmail size={35} />
          </a>
        </div>
        <p>&copy; 2024 Dawood Ayaz. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
}

export default App