import React, { useState, useEffect } from 'react';
import { logo, search, basket } from "../utils/constants.jsx";
import MenuBtn from "./MenuBtn.jsx";
import "../components/Header.css";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);


  const handleRefresh = () => {
    window.location.reload();
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < lastScrollPos || currentScrollPos === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  document.querySelectorAll('[data-scroll-to]').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-scroll-to');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <nav>
        <ul className="desktop-ul-el">
          <button className='nav-btn' data-scroll-to="hero">Home</button>
          <button className='nav-btn' data-scroll-to="about">About</button>
          <button className='nav-btn' data-scroll-to="menu">Menu</button>
          <button className='nav-btn' data-scroll-to="reservation">Reservation</button>
        </ul>
        <button onClick={handleRefresh}>
          <img src={logo} alt="" className="logo" />
        </button>
        <ul className="desktop-ul-el">
          <button className='nav-btn'>Pages</button>
          <button className='nav-btn' data-scroll-to="shop">Shop</button>
          <button className='nav-btn'>Contact</button>
          <button>
            <img src={search} alt="" className="action-btn-img" />
          </button>
          <button>
            <img src={basket} alt="" className="action-btn-img" />
          </button>
        </ul>
        <MenuBtn />
      </nav>
    </header>
  );
}

export default Header;
