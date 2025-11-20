import React from 'react'
import Header from './Components/header.component';
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
              <Header />

              <section id="home" className="flex justify-between items-center px-[5%] py-[5%] md:px-[10%] md:py-[10%]">
                <div className="mt-28 mb-24 md:mt-16 max-w-32 md:max-w-[600px]">
                  <h1 className="text-3xl md:text-[56px] font-bold leading-tight">Hey there! I am Dawood Ayaz</h1>
                  <h3 className="text-2xl md:text-[32px] font-bold text-[#ca6702] leading-tight animate-pulse">REACT.JS Developer / REACT Native App Developer</h3>
                  <div className="flex space-x-6 mt-10">
                    <a href="mailto:dawoodayaz18@gmail.com" className="px-2 md:px-6 md:py-3 bg-[#ca6702] text-orange-950 font-bold md:text-lg rounded-lg hover:bg-[#ca6702] hover:text-white border border-[#ca6702] transition-all">Contact me</a>
                    <a href="http://linkedin.com/in/choudhry-dawood-ayaz-b6560b317" className="px-2 md:px-6 md:py-3 font-bold md:text-lg border border-[#ca6702] text-orange-950 rounded-lg hover:bg-[#ca6702] hover:text-white transition-all">My Linkedin</a>
                    <a className="cursor-pointer w-7 h-7" onClick={() => window.location.href = '//github.com/Dawoodayaz20'}> 
                    <FaGithub className='ml-1 md:ml-12 animate-bounce size-8 md:size-12' />
                    </a>
                  </div>
                </div>
                <img className="rounded-full w-[47%] h-[100%] md:w-[30%] md:h-[65%] object-cover clip-path-circle" src="CV pic.jpg" alt="Portfolio" />
              </section>

              <section id="about" className="flex flex-col items-center gap-8 pb-12">
                <h2 className="text-3xl md:text-4xl text-center">About <span className="text-[#ca6702]">Me</span></h2>
                <div className="relative w-[25rem] h-[25rem] flex justify-center items-center hover:border-black">
                  <img src="Portfolio Pic 0.jpg" className="w-[20rem] h-[20rem] object-cover rounded-full" alt="About" />
                  <span className="absolute top-0 left-0 w-full h-full rounded-full border-[0.2rem] border-[#ca6702] animate-spin-slow"></span>
                </div>
                <h3 className="text-2xl">Front-End Developer</h3>
                <p className="text-[1.5rem] text-center mx-8 font-sans text-orange-950">
                  I'm Dawood Ayaz, a passionate Front-end Web Developer with over 3 years of experience crafting sleek and responsive web applications. I specialize in turning ideas into clean, user-friendly interfaces using React, JavaScript, and Tailwind CSS.<br />
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
                      <h3 className="text-xl font-bold animate-bounce">{edu.title}</h3>
                      <p className='animate-bounce'>{edu.duration}</p>
                    </div>
                  </div>
                ))}
              </section>
                
              <section id='skills' className='mt-20 text-center justify-center'>
                <h1 className='text-4xl my-12'>My Skills</h1>
                <div className='justify-center text-center border-2 border-[#ca6702] rounded-lg mx-20'>
                {[
                  { Skill: "REACT JS", percent:"60%"},
                  { Skill: "REACT Native", percent:"65%"},
                  { Skill: "TypeScript", percent:"50%"},
                  { Skill: "Tailwind CSS", percent:"85%"},
                  { Skill: "JavaScript", percent:"75%"},
                  { Skill: "HTML", percent:"95%"},
                  { Skill: "CSS", percent:"95%"},
                  { Skill: "Python", percent:"75%"},
                  { Skill: "FastApi", percent:"50%"},
                ].map((skill) => (
                    <div className="flex justify-center">
                      <div className="mb-6 w-3/5">
                        <p className="text-lg font-semibold text-center">{skill.Skill}</p>
                        <div className=" bg-orange-950 w-full h-4 rounded-full overflow-hidden">
                          <div className="bg-[#ca6702] h-full animate-pulse" style={{ width: skill.percent }}></div>
                        </div>
                    </div>
                  </div>
                ))}
                </div>
              </section>

              <section id="projects" className="text-center py-10">
                <h1 className="text-4xl mb-8">My Projects</h1>
                <h2 className="text-2xl mb-8">Web-Based Apps</h2>
                <div className="flex flex-wrap justify-center gap-8">
                {[
                  { title: "Restaurant Website - Login/Sign Up + Chatbot", link:"https://bunsandburger.vercel.app/", Tech_Stack: "ReactJS, TailwindCSS, FastApi, Python, CrewAi, Appwrite"},
                  { title: "Health Tracking Mobile App", link:"https://github.com/Dawoodayaz20/Health_tracking_app.git", Tech_Stack: "REACT Native, TypeScript, Expo, Python, FastAPI, OPENAI Agents SDK"},
                  { title: "Restaurant Website in React with Chatbot", link:"https://buns-and-burger-in-react.vercel.app/", Tech_Stack: "ReactJS, TailwindCSS, FastApi, Python, CrewAi"},
                  { title: "Restaurant Website", link:"https://dawoodayaz20.github.io/Buns_and_Burger/index.html", Tech_Stack: "HTML5, JavaScript, CSS"},
                  { title: "Restaurant Customer Support Assistant", link:"https://vercel-fastapiproject.vercel.app/docs", Tech_Stack: "Python, FastApi, OpenAi Agents SDK"},
                  { title: "Restaurant Customer Support Ai Agent", link:"https://customersupportagent-production.up.railway.app/", Tech_Stack: "React, TailwindCSS, FastApi, Python, CrewAi"},
                  { title: "Travel Planning Ai Agent", link:"https://huggingface.co/spaces/chdaud21/travel_agent", Tech_Stack: "Streamlit, Python, OpenAI Agents SDK"},
                  { title: "Blog Writing Ai Agent", link:"https://github.com/Dawoodayaz20/Streamlit_blog_writer.git", Tech_Stack: "Streamlit, Python, CrewAi"}
                ].map((pro,lin) => (
                  <div key={lin} className="border-2 border-[#ca6702] rounded-2xl p-8 w-80 text-center hover:text-[#ca6702] transition-all">
                    <p className="text-2xl my-4">{pro.title}</p>
                    <a href={pro.link} className="px-6 py-2 bg-[#ca6702] text-orange-950 font-bold text-lg rounded-lg hover:bg-[#ca6702] hover:text-white border border-[#ca6702] transition-all">View Project</a>
                    <p className='mt-8 text-yellow-900 text-base'><b>Tech Stack: </b>{pro.Tech_Stack}</p>
                  </div>
              ))}
              </div>
                <h2 className="text-2xl mt-10 mb-8">REACT-Native Mobile Apps</h2>
                <div className="flex flex-wrap justify-center gap-8">
                {[
                  { title: "Medical Health Tracker App" , link:"https://github.com/Dawoodayaz20/Medical-Health-Tracker-App.git", Tech_Stack: "React Native, TypeScript, FastApi, Python, OpenAi Agents SDK, Appwrite", DownloadLink:"https://expo.dev/accounts/daud21/projects/MedicalHealthTrackerApp/builds/129e820d-3039-4b43-a0fe-de49b0797472"},
                  {title: "Random Quote Generator App" , link:"https://github.com/Dawoodayaz20/CodeAlpha_Random_Quote_Generator_App.git", Tech_Stack: "React Native, TypeScript"},
                  {title: "FlashCard Quiz App" , link:"https://github.com/Dawoodayaz20/CodeAlpha_FlashCard_Quiz_App.git", Tech_Stack: "React Native, TypeScript"}
                ].map((pro,lin) => (
                  <div key={lin} className="border-2 border-[#ca6702] rounded-2xl p-8 w-80 text-center hover:text-[#ca6702] transition-all">
                    <p className="text-2xl my-4">{pro.title}</p>
                    <a href={pro.link} className="px-6 py-2 bg-[#ca6702] text-orange-950 font-bold text-lg rounded-lg hover:bg-[#ca6702] hover:text-white border border-[#ca6702] transition-all">View Project</a>
                    <p className='mt-8 mb-8 text-yellow-900 text-base'><b>Tech Stack: </b>{pro.Tech_Stack}</p>
                    {pro.DownloadLink ?
                      <a href={pro.DownloadLink} className="px-6 py-2 bg-[#ca6702] text-orange-950 font-bold text-lg rounded-lg hover:bg-[#ca6702] hover:text-white border border-[#ca6702] transition-all">Download APK</a>
                      :
                      <p>No APK</p>
                    }
                  </div>
              ))}
              </div>
              </section>

              <section id="contact" className="flex flex-col items-center justify-center h-[70vh] text-center">
                <p className="text-[1.4rem]">Get in Touch<br />To collaborate or for any other service, I'm open to opportunities.</p>
                <h1 className="pt-8 text-[1.7rem]">Contact Me</h1>
                <div className="flex items-center gap-6 border border-[#ca6702] p-6 mt-6 rounded-2xl"> 
                    <MdEmail size={28} />
                  <a className='cursor-pointer hover:text-[#ca6702]' onClick={() => window.location.href = 'mailto:dawoodayaz18@gmail.com'}>dawoodayaz18@gmail.com</a>
                    <FaLinkedin size={28} />
                  <a className='cursor-pointer hover:text-[#ca6702]' onClick={() => window.location.href="http://linkedin.com/in/choudhry-dawood-ayaz-b6560b317"}>LinkedIn</a>
                </div>
              </section>

              <footer className="text-center py-8 bg-yellow-100">
                <div className="flex justify-center gap-16 mb-4">
                  <a className="cursor-pointer w-6 h-6" onClick={() => window.location.href = 'http://www.github.com/Dawoodayaz20'}> 
                    <FaGithub size={35} />
                  </a>
                  <a className="cursor-pointer w-6 h-6" onClick={() => window.location.href = 'http://www.linkedin.com/in/dawood-ayaz-b6560b317'}> 
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
