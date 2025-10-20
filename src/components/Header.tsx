"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header({ aboutRef, servicesRef, skillsRef, contactRef }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      const topOffset =
        ref.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 overflow-x-hidden">
        <div className="flex justify-between items-center px-4 py-4 md:px-6 w-full max-w-full">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#2fc2e3] whitespace-nowrap">
            Sajawal Baig
          </h1>

          <div
            className="md:hidden pr-10 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </div>


          <nav className="hidden md:flex items-center pr-20 gap-6 lg:gap-8">
            <span
              onClick={scrollToTop}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection(servicesRef)}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              Services
            </span>
            <span
              onClick={() => scrollToSection(skillsRef)}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              Skills
            </span>

          
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-[#0591b0] hover:bg-[#04859f] transition text-white rounded-3xl text-sm md:text-base px-5 py-2 whitespace-nowrap"
            >
              Contact me
            </button>
          </nav>
        </div>

        {open && (
          <nav className="flex flex-col items-center gap-4 py-4 bg-gray-900 border-t border-gray-700 w-full overflow-x-hidden">
            <span
              onClick={scrollToTop}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              About
            </span>
            <span
              onClick={() => scrollToSection(servicesRef)}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              Services
            </span>
            <span
              onClick={() => scrollToSection(skillsRef)}
              className="hover:text-[#2fc2e3] cursor-pointer transition"
            >
              Skills
            </span>

       
            <button
              onClick={() => scrollToSection(contactRef)}
              className="bg-[#0591b0] hover:bg-[#04859f] transition text-white rounded-3xl text-sm px-5 py-2"
            >
              Contact me
            </button>
          </nav>
        )}
      </header>

      <div className="h-[80px] md:h-[100px]"></div>
    </>
  );
}

export default Header;
