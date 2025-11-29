"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServicesSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Faster animation with stagger
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0, scale: 0.85 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08, // slightly staggered for smooth effect
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const skillsGrouped = [
    { name: "HTML", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg", desc: "Semantic, SEO-friendly and fully structured markup." },
    { name: "CSS", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg", desc: "Modern responsive layouts with animations & grids." },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", desc: "Interactive & dynamic functionalities with ES6+." },
    { name: "React.js", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", desc: "Reusable components & smooth UI experience." },
    { name: "Next.js", icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", desc: "SSR, SSG, SEO-friendly modern web apps." },
    { name: "TailwindCSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", desc: "Utility-first, fast, responsive styling." },
    { name: "Bootstrap", icon: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg", desc: "Responsive design framework with prebuilt components." },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", desc: "Event-driven, non-blocking I/O server-side runtime for scalable apps." },
    { name: "GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", desc: "Version control and collaborative development platform." },
  ];

  const addToCards = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  return (
    <section id="skills" className="min-h-[100vh] bg-gradient-to-b from-[#9a74cf50] to-black py-20 px-6">
      <div className="container mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
          <span className="text-purple-400">Skills</span>
        </h1>
        <p className="text-purple-200 mt-4 md:text-lg">Tools and technologies I use to build fast, modern, scalable web experiences.</p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto">
        {skillsGrouped.map((skill, i) => (
          <div key={i} ref={addToCards} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.03]">
            <div className="flex flex-col items-center text-center">
              <img src={skill.icon} alt={skill.name} className="h-20 w-20 object-contain mb-4" />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              <p className="text-purple-200 mt-2 text-sm">{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
