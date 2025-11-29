import React from 'react'
import Header from './components/Header'
import HeroSection from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServiceSection'
import Contact from './components/Contact'

function page() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <Contact/>
    </>
  )
}

export default page
