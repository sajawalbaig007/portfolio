"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement[]>([]);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  const [clientStars, setClientStars] = useState<
    { width: number; height: number; opacity: number; top: number; left: number }[]
  >([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Generate stars only on client to fix hydration error
    setClientStars(
      [...Array(13)].map((_, i) => ({
        width: 10 + i * 3,
        height: 10 + i * 3,
        opacity: 0.2 + Math.random() * 0.4,
        top: Math.random() * 100,
        left: Math.random() * 100,
      }))
    );

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -60,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -500 + index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    // Marquee Animation
    const track = marqueeRef.current;
    let marqueeTween: gsap.core.Tween | null = null;

    const startMarquee = () => {
      if (!track) return;

      const totalWidth = track.scrollWidth;
      const singleWidth = totalWidth / 2;

      marqueeTween?.kill();

      marqueeTween = gsap.to(track, {
        x: -singleWidth,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) =>
            gsap.utils.wrap(-singleWidth, 0, parseFloat(x))
          ),
        },
      });
    };

    if (track) {
      const imgs = Array.from(track.querySelectorAll("img"));
      let loaded = 0;

      imgs.forEach((img) => {
        if (img.complete) loaded++;
        else img.addEventListener("load", () => ++loaded);
      });

      const check = setInterval(() => {
        if (loaded === imgs.length) {
          startMarquee();
          clearInterval(check);
        }
      }, 50);
    }

    return () => {
      marqueeTween?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const addToStars = (el: HTMLDivElement | null) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  const logos = [
    "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-[130vh] relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {clientStars.map((star, i) => (
          <div
            ref={addToStars}
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              backgroundColor: "white",
              opacity: star.opacity,
              top: `${star.top}%`,
              left: `${star.left}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-bold text-center text-white opacity-0 mt-24"
        >
          About me
        </h1>
      </div>

      {/* Intro */}
      <div
        ref={introRef}
        className="mt-16 w-full flex md:flex-row flex-col justify-between lg:px-24 px-9 items-center opacity-0"
      >
        <h3 className="text-sm md:text-2xl text-purple-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider">
          Hi, I’m <span className="font-bold text-white">Umama Khan</span>, a
          Full Stack Web Developer passionate about building responsive,
          performant, and visually stunning web applications. I specialize in
          creating seamless user experiences using{" "}
          <span className="font-semibold text-purple-400">
            React.js, Next.js, Tailwind, and modern web technologies
          </span>
          .
        </h3>

        <img
          className="lg:h-[30rem] md:h-[15rem] h-[20rem] mix-blend-lighten mt-8 md:mt-0"
          src="/images/m.jpg"
          alt="Umama Khan"
        />
      </div>

      {/* Logos Marquee */}
      <div className="bg-transparent overflow-hidden h-[100px] w-[90%] mx-auto flex items-center mt-12">
        <div className="relative w-full overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt="tech-logo"
                className="h-16 w-auto object-contain"
                loading="lazy"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
