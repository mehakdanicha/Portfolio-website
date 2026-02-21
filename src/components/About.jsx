import React from "react";
import "./About.css";
import js from '../assets/js.png'
const About = () => {
  return (
    <div id="about" className="p-8 mt-6 bg-transparent">

      <header className="text-center mt-16 font-titlefont ">
        <h2 className='font-bold text-3xl sm:text-xl md:text-2xl lg:text-3xl h2'>ABOUT ME</h2>
      </header>

      {/* Underlined Section */}
      <div className="mt-2 text-center font-bodyfont">
        <hr className="w-20  mx-auto border-2 border-blue-500" />
        <p className="mt-6 text-lg  text-gray-300">
          Here you will find more information about me, what I do,and my current skills.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="mt-6 flex px-6 flex-col justify-center lg:flex-row gap-12 mx-5 font-bodyfont">
        {/* About Written */}
        <div className="lg:w-[50%] w-full mx-auto text-gray-200 lg:pr-4">
          <h3 className="mt-8 text-xl font-bold text-white">
            Get to Know Me!
          </h3>
          <p className="mt-4 text-lg sm:text-sm md:text-lg leading-relaxed break-words text-gray-300">
            I’m a passionate Frontend Developer 💻 
            focused on creating beautiful, user-friendly websites and 
            web applications. With expertise in frontend technologies 
            like React ⚛️, I build seamless and interactive applications. 
            I’m also exploring backend technologies such as Node.js 🟢 and Express ⚡, and working with APIs 🌐 to expand my full-stack capabilities. I’m dedicated to constantly learning 📚 and improving to become a stronger, more versatile developer.
          </p>
          <p className="mt-4 text-lg sm:text-lg md:text-lg leading-relaxed text-gray-300">
            I’m open to job or freelance opportunities 💼 where I can contribute, grow, and create meaningful projects. If you have a role that aligns with my skills, feel free to connect or follow me on{" "}
            <span className="text-blue-400 underline font-bold">
              <a href="https://www.linkedin.com/in/mehak-danicha-75a045231/" target="_blank" rel="noreferrer">
                LinkedIn.
              </a>
            </span>
          </p>
        </div>
        {/* skills section */}
        <div className="lg:w-[50%] w-full ml-2 mx-auto">
          <h2 className="mt-8 text-2xl font-bold text-white">My Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3 text-slate-700 font-medium font-titlefont skills-container">
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              JavaScript
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              React
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              Node.js
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              CSS
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              Tailwind CSS
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              HTML
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              Express.js
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              Next.js
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              WordPress
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              Firebase
            </div>
            <div className="px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-md shadow-sm text-white inline-block skill-item">
              Git/Github
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
