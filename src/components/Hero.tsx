"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { link } from "fs";

function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative mt-[-30px] w-full h-auto md:h-[630px] bg-cover bg-center flex flex-col md:block items-center md:items-start overflow-hidden px-4 md:px-0"
        style={{
          backgroundImage:
            "url('Images/momo-morpheus-D83zC77SZ30-unsplash.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative z-10 rounded-full border-4 border-[#2fc2e3] h-40 w-40 object-cover mt-20 md:mt-6 md:hidden"
          src="Images/WhatsApp Image 2025-09-18 at 12.48.54_e28b6fa4.jpg"
          alt="Sajawal Baig"
        />

        <div className="relative z-10 flex flex-col md:ml-14 md:pt-32 h-full items-center md:items-start text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white text-lg md:text-xl"
          >
            Hey, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#07b7df] pt-1 text-3xl md:text-5xl font-bold mt-2"
          >
            Sajawal Baig
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-4xl pt-4 text-white font-medium"
          >
            And I am a{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-[#2fc2e3] font-bold inline-block"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white text-sm md:text-base pt-4 pr-3 leading-relaxed max-w-md"
          >
            I’m a passionate Full-Stack Developer with a strong focus on
            building efficient, user-friendly web applications. I excel at
            managing time effectively, balancing multiple projects while
            delivering clean and scalable solutions on schedule.
          </motion.span>

          <div className="flex gap-5 mt-4 text-white">
            {[
  { icon: <IoLogoWhatsapp className="size-14" />, delay: 0.8, link: "https://wa.me/923064869689" },
  { icon: <FaLinkedin className="size-14" />, delay: 1.0, link: "https://www.linkedin.com/in/sajawal-baig-7429ba360?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: <FaInstagram className="size-14" />, delay: 1.2, link: "https://www.instagram.com/sajawal_baig11?igsh=aGtiZHk0N2RqZDNs" },
  { icon: <FaGithub className="size-14" />, delay: 1.4, link: "https://github.com/sajawalbaig007" },
].map((item, i) => (
  <motion.a
    key={i}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.3, delay: item.delay }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.2,
      boxShadow: "0px 0px 12px #2fc2e3",
    }}
    className="border size-10 border-[#2fc2e3] rounded-full p-2 cursor-pointer flex items-center justify-center transition-transform"
  >
    {item.icon}
  </motion.a>
            ))}
          </div>

        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 my-8"
          >
            {/* <button className="bg-[#2fc2e3] text-white text-lg px-6 py-3 rounded-xl hover:bg-[#1daec8] transition">
              More About Me
            </button> */}
            <button className="bg-transparent text-white text-lg px-6 py-3 rounded-xl border border-4 border-[#2fc2e3] transition">
              Download CV
            </button>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
          className="hidden md:block rounded-full border-4 border-[#2fc2e3] h-80 w-80 object-cover absolute right-24 top-24"
          src="Images/WhatsApp Image 2025-09-18 at 12.48.54_e28b6fa4.jpg"
          alt="Sajawal Baig"
        />
      </div>
    </>
  );
}

export default Hero;
