"use client";
import React, { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "./about/page";
import Services from "./service/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

function Page() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null); 

  return (
    <>
      <Header
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        contactRef ={contactRef} 
      />
      <Hero />

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={contactRef}>
        <Contact /> 
      </div>
    </>
  );
}

export default Page;
