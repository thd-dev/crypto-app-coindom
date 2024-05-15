import React from 'react'
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
import Join from './componets/Join';
import WhyUs from './componets/WhyUs';
import Hero from './componets/Hero';
import Market from './componets/Market';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Market />
      <WhyUs />
      <Join />
      <Footer />
    </>
  )
}

export default App
