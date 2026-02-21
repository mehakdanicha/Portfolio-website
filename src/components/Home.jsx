import React, { useEffect } from "react";
import { Link, scroller } from "react-scroll"; // Import React Scroll
import { useLocation } from "react-router-dom";
import TypingEffect from "react-typing-effect"; // Import Typing Effect
import image from "../assets/removebg.png";
import "./Home.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;
      // small delay to ensure sections are rendered
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 600, offset: -80 });
        // clear the history state so it doesn't trigger again
        try {
          window.history.replaceState({}, document.title, window.location.pathname);
        } catch (e) {
          // ignore
        }
      }, 50);
    }
  }, [location]);
  return (
    <>
      {/* Navbar */}

      {/* Home Section */}
      <section id="home" className="min-h-screen bg-black pt-20 mt-20">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20">
          {/* Left Section - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-2xl mb-2 h2">Welcome to my portfolio!</h2>
            <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white">
              {" "}
              <span className="typing-highlight">
                <TypingEffect
                  text={["Hey ! I'm Mehak", "A Frontend Developer"]}
                  speed={150}
                  eraseSpeed={100}
                  typingDelay={500}
                  eraseDelay={1000}
                  cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                />
              </span>
            </h2>
            <p className="text-white mt-6 text-lg sm:text-xl md:text-xl">
              I build modern, responsive, and high-quality web experiences with React & Next.js.
              Focused on clean UI, smooth interactions, and creating products that feel professional.
            </p>

            {/* Buttons Container */}
            <div className="mt-8 flex flex-col sm:flex-row  gap-5 text-lg">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-blue-600 text-white px-10 py-5 rounded-lg shadow-md font-bold cursor-pointer hover:bg-blue-700 btn btn-primary"
              >
                Projects
              </Link>
              <a
                href="/reactjs-cv.pdf" // path to your resume file in the public folder
                download="Mehak_Resume.pdf" // Name the downloaded file
                className="bg-green-600  text-white px-10 py-5 rounded-lg shadow-md font-bold cursor-pointer hover:bg-green-700 btn btn-resume"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img
              src={image}
              alt="Coding Laptop"
              className="w-[80%] sm:w-[70%] lg:w-[60%] max-w-lg rounded-lg hero-image"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>


    </>
  );
};

export default Home;
