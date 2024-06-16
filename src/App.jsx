import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App