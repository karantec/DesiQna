import React from 'react'
import { Navbar } from './components/navbar/NavBar';
import { Footer } from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Feature from './components/Features/Feature';
import About from './components/about/About';
const App = () => {
  return (
    <>
    <Router>


    <Navbar/>
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>



    </Routes>
    <Footer/>
    </Router>

    </>
  )
}

export default App