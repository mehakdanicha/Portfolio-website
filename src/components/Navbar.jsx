import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/removebg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    if (location.pathname === "/") {
      // already on home: use react-scroll behavior
      // nothing here because we'll render ScrollLink when on home
      return;
    }
    // navigate to home and pass the target section in state
    navigate("/", { state: { scrollTo: section } });
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            {location.pathname === "/" ? (
              <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">
                Mehak Dayalal
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="cursor-pointer">
                Mehak Dayalal
              </RouterLink>
            )}
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg text-white">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              {location.pathname === "/" ? (
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-blue-600"
                  className="cursor-pointer hover:text-blue-600 transition-all"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavClick(section)}
                  className="cursor-pointer hover:text-blue-600 transition-all"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <ul
        className={`md:hidden bg-black/60 backdrop-blur-lg text-white font-semibold absolute left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        { ["home", "about", "projects", "contact"].map((section) => (
          <li key={section} className="px-6 py-3">
            {location.pathname === "/" ? (
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                className="block cursor-pointer hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ) : (
              <span
                onClick={() => {
                  setIsOpen(false);
                  handleNavClick(section);
                }}
                className="block cursor-pointer hover:text-pink-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
