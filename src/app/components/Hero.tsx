"use client"
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Creative\nPractical Solutions",
      "Smart\nReliable Workflows",
      "Your\nDream Website",
      "Fast\nReliable Results",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 25,
    delaySpeed: 1500,
  });

const socialLinks: { icon: React.ReactNode; link: string }[] = [
    { icon: <IoLogoWhatsapp />, link: "https://wa.me/923208083931" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/umama-khan-339734381/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/umi_khan125" },
    { icon: <FaGithub />, link: "https://github.com/umikhannn789-crypto" },
  ];

  return (
    <section id="home" className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.3 }}
          className="text-4xl md:text-3xl lg:text-4xl font-bold z-10 mb-6 mt-9 leading-tight text-white"
        >
          <span className="block">Building</span>
          {text.split("\n").map((line, idx, arr) => (
            <span key={idx} className={idx === arr.length - 1 ? "inline-block" : "block"}>
              {line}
              {idx === arr.length - 1 && <Cursor cursorStyle="|" cursorBlinking />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.8 }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl mb-6"
        >
          Hi, I’m <span className="font-bold text-white">Umama Khan</span>, a passionate{" "}
          <span className="font-semibold text-purple-400">Full Stack Web Developer</span>.
          I craft responsive and production-ready web applications using modern
          technologies, delivering high-quality, scalable solutions for businesses and
          personal projects.
        </motion.p>

        <div className="flex gap-5 mt-4 mb-6">
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-2xl rounded-full border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-black transition-all shadow-lg"
              whileHover={{ scale: 1.3, rotate: 10, boxShadow: "0 0 20px #9f7aea" }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/umama-cv.pdf"
          download="umama-cv.pdf"
          className="inline-block px-6 py-3 font-semibold text-black bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05, y: -2 }}
        >
          Download CV
        </motion.a>
      </div>

      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/ZH0N0X5EF3nNQdC1/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
