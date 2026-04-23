import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import Pricing from './Pricing'
import Footer from './Footer'

export default function Landing(){
  return (
    <div className="landing">
      <NavBar />
      <Hero />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}


