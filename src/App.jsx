import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='COURSES'  title='WHAT WE OFFER'/>
        <Programs/>
        <About/>
        <Title subTitle='GALLERY'  title='CAMPUS PHOTOS'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS'  title='What Students Say'/>
        <Testimonials/>
        <Title subTitle='CONTACT US'  title='Get In Touch With Us'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App