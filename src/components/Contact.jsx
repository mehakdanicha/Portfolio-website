import React from 'react';
import picture from '../assets/removebg.png';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black text-white">
      {/* Page Heading */}
      <div className="text-center pt-8 pb-4">
        <h1 className="text-4xl font-bold h1">Contact Me</h1>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-8 pb-12 gap-6">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={picture}
            alt="Contact"
            className="rounded-full w-80 h-80 object-cover shadow-lg"
          />
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/2 space-y-5 mt-6 md:mt-0">
          
          <p className="text-lg text-gray-300">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the following methods, and I’ll get back to you as soon as possible!
          </p>
          <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-300">Email</h2>
            <p className="text-gray-600">mehakdayalal@gmail.com</p>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-300">Location</h2>
            <p className="text-gray-600">Karachi, Pakistan</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/mehak-dayalal/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56V24H.22V8zM8.81 8h4.38v2.18h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7V24h-4.56v-7.02c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.68 1.82-2.68 3.7V24H8.81V8z" />
              </svg>
            </a>
            <a href="https://github.com/mehakdanicha" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.18 9.09 7.59 10.56.55.1.75-.24.75-.53 0-.26-.01-1.12-.02-2.02-3.09.67-3.74-1.49-3.74-1.49-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.14.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.17-1.44 3.12-1.14 3.12-1.14.61 1.52.23 2.64.11 2.92.72.78 1.16 1.77 1.16 2.99 0 4.29-2.61 5.24-5.09 5.52.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.64.76.53C19.07 20.84 22.25 16.67 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
