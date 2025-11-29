"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Contact"];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // optional offset for fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 h-16 md:h-20">
        {/* Logo / Name */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Umama Khan
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4 items-center">
          {menuItems.map((item, idx) => (
            <motion.button
              key={idx}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-white font-medium text-sm md:text-base px-4 py-2 rounded transition-colors ${
                item === "Contact" ? "bg-purple-500 hover:bg-purple-600" : "hover:text-purple-400"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <motion.button onClick={toggleMenu} whileTap={{ scale: 0.9 }} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black flex flex-col items-center gap-4 py-6 shadow-lg"
          >
            {menuItems.map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-white text-lg px-4 py-2 rounded transition-colors ${
                  item === "Contact" ? "bg-purple-500 hover:bg-purple-600" : "hover:text-purple-400"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
