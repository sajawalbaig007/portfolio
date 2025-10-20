"use client";
import React from "react";
import { IoGlobeSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Page() {
  const cards = [
    {
      id: 1,
      logo: <IoGlobeSharp />,
      title: "Full Stack Developer",
      description:
        "Full Stack Developer with experience in designing, developing, and deploying web applications.",
    },
    {
      id: 2,
      logo: <FaPaintBrush />,
      title: "Frontend Developer",
      description:
        "Passionate about creating interactive, responsive, and visually appealing web interfaces using modern technologies.",
    },
    {
      id: 3,
      logo: <IoSettingsSharp />,
      title: "Backend Developer",
      description:
        "Specializing in building robust, scalable, and efficient server-side applications and APIs.",
    },
  ];

  return (
    <div className="bg-gray-950 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }} 
        className="text-[#2fc2e3] text-4xl font-bold text-center mb-12"
      >
        Services
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 px-6 sm:px-10 lg:px-20 max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg mx-auto">

        {cards.map((i, index) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center text-center 
                       hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-gray-900">
            <span className="bg-gray-700 rounded-full text-white flex items-center justify-center w-24 h-24 text-5xl mb-5">
              {i.logo}
            </span>
            <h1 className="text-white text-2xl font-bold mb-3">{i.title}</h1>
            <p className="text-gray-300 text-base">{i.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Page;
