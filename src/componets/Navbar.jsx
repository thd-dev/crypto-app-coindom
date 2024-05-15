import React from 'react';
import { useState } from 'react';

const Navbar = () => {
   const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

    const handleScroll = () => {
    if (window.scrollY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const openMobile = () =>{
      setMobile(!mobile)
  }
  return (
    <header
      className = {`${sticky ?'fixed': ''} ${mobile ? 'active' : ''}`}
    >
        <div className="logo">
            <h1><a href="#">COINDOM</a></h1>
        </div>
        <nav>
            <ul>
                <li onClick={openMobile}><a href="#hero">Home</a></li>
                <li onClick={openMobile}><a href="#market__updates">Market</a></li>
                <li onClick={openMobile}><a href="#whyUs">Choose Us</a></li>
                <li onClick={openMobile}><a href="#joinUs">Join</a></li>
            </ul>
        </nav>
        <div className="social--icons ">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-discord"></i>
        </div>

        <div 
          className='nav_icon'
          onClick={openMobile}
        >
          <div className={`ham-stick ${mobile ? 'open-menu' : ''}`}></div>
          <div className={`ham-stick ${mobile ? 'open-menu' : ''}`}></div>
          <div className={`ham-stick ${mobile ? 'open-menu' : ''}`}></div>
        </div>
    </header>
  )
}

export default Navbar
