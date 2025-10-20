"use client";
import React from 'react';
import { motion } from 'framer-motion';

function Page() {
  return (
    <div className='bg-gray-900'>
      <motion.h1
        className='text-[#2fc2e3] text-4xl text-center py-10 font-bold'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }} 
      >
        About Me
      </motion.h1>

      <div className='text-lg mx-10  text-white px-6 md:px-60 space-y-10'>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          I am a <span className='text-[#2fc2e3] text-xl font-semibold'>Sajawal Baig</span>, a passionate Full-Stack Developer who specializes in building fast, responsive, and user-focused websites. My goal is to combine clean design with powerful functionality—ensuring every project loads quickly, looks great on all devices, and delivers an exceptional user experience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          As a Frontend and Backend Developer, I love turning complex problems into elegant digital solutions. From designing sleek, responsive interfaces to optimizing server performance, I bring creativity and technical skill together to deliver complete web experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className='pb-20'
        >
          Always curious, always improving. I’m a developer who loves exploring new technologies and transforming ideas into modern, high-performance digital solutions.
        </motion.p>
      </div>
    </div>
  );
}

export default Page;
