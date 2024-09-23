import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Works from './Components/Works'
import Resume from './Components/Resume'
import Skills from './Components/Skills'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Works></Works>
      <Services></Services>
      <Resume></Resume>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App