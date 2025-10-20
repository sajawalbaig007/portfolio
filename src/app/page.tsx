"use client";
import React, { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "./about/page";
import Services from "./service/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

function Page() {
  // ✅ Explicitly type refs so TypeScript knows they reference HTML elements
  const aboutRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {/* ✅ Pass refs safely */}
      <Header
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <Hero />

      {/* ✅ Attach refs to wrapping <section> or <div> elements */}
      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
}

export default Page;
