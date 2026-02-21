import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import projects from "../assets/Data.js"; // Import project data

const Projects = () => {
  return (
    <section className="bg-transparent  py-8 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-6xl px-6">
        {/* Header */}
          <header className="text-center mt-4 font-titlefont">
          <h2 className="font-bold text-3xl md:text-2xl lg:text-3xl h2">PROJECTS</h2>
        </header>

        {/* Underlined Section */}
        <div className="mt-6 text-center font-bodyfont">
          <hr className="w-20 mx-auto border-2 border-blue-500" />
          <p className="mt-6 text-lg text-gray-300">
          Here, you’ll find a selection of personal learning projects
          I’ve created, each showcasing the skills and technologies I’ve learned along the way.
            <br />
          </p>
        </div>

        {/* Card Grid */}
        <div className="mt-8 grid gap-8 py-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-transparent rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all w-full project-card"
            >
              {/* Image */}
              <div className="flex justify-center mt-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-[90%] h-auto object-cover rounded-xl" // Image takes 90% of the card width within grid card
                />
              </div>

              {/* Card content */}
              <div className="p-6 card">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{project.description}</p>
                <Link
                  to={`/projectdetail/${project.id}`} // Use Link to navigate to project detail page
                  className="inline-block mt-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
