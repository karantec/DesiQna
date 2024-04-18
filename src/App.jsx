import { Navbar } from './components/navbar/NavBar';
import { Footer } from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import Contact from './components/contact/Contact';
import {BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Curriculum from './components/Curriculum/Curriculum';
import Testi from './components/Testimonial/Testi';
import Achiver from './components/TopAchiver/Achiver';

const App = () => {

  return (
    <>
    <Router>


    <Navbar/>
    <Routes>
      <Route path='/' element={<HeroSection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/Curriculum" element={<Curriculum/>}/>
      <Route path="/Testimonial" element={<Testi/>}/>
      <Route path="/Achiver" element={<Achiver/>}/>
    </Routes>
    <Footer/>
    </Router>

    </>
  )
}

export default App