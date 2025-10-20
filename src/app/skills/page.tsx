"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

function Page() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white text-5xl" />, name: "Next.js" },
    { icon: <SiTailwindcss className="text-cyan-500 text-5xl" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300 text-5xl" />, name: "Express.js" },
    { icon: <SiMongodb className="text-green-400 text-5xl" />, name: "MongoDB" },
    { icon: <FaDatabase className="text-indigo-400 text-5xl" />, name: "Database Design" },
  ];

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-16 md:pt-10 pb-10 px-6 flex flex-col items-center justify-start">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={container}
        className="flex flex-col items-center justify-center w-full mt-10 md:mt-0"
      >
        <motion.h2
          variants={item}
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-cyan-400/30 transition"
            >
              {skill.icon}
              <h3 className="mt-3 text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Page;
