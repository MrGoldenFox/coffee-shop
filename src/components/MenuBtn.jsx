import React, { useState, useEffect } from "react";
import { menu, search, basket, logo, close } from "../utils/constants.jsx";
import "./MenuBtn.css";

function MenuBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Function to handle smooth scroll with data-scroll-to attribute
  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="menu-container">
        <button>
          <img src={search} alt="" className="action-btn-img" />
        </button>
        <button>
          <img src={basket} alt="" className="action-btn-img" />
        </button>
        <button
          className={`menu-btn ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img src={menu} alt="Menu" />
        </button>
      </div>
      {isOpen && (
        <section className="section-menu">
          <button className="logo-btn">
            <img src={logo} alt="" />
          </button>
          <button className="menu-btn section-menu-btn" onClick={toggleMenu}>
            <img src={close} alt="Menu" />
          </button>
          <ul className="mobile-ul-el">
            <button
              className="nav-btn"
              data-scroll-to="hero"
              onClick={() => {
                handleScrollTo("hero");
                toggleMenu(); // Close menu after click
              }}
            >
              Home
            </button>
            <button
              className="nav-btn"
              data-scroll-to="about"
              onClick={() => {
                handleScrollTo("about");
                toggleMenu();
              }}
            >
              About
            </button>
            <button
              className="nav-btn"
              data-scroll-to="menu"
              onClick={() => {
                handleScrollTo("menu");
                toggleMenu();
              }}
            >
              Menu
            </button>
            <button
              className="nav-btn"
              data-scroll-to="reservation"
              onClick={() => {
                handleScrollTo("reservation");
                toggleMenu();
              }}
            >
              Reservation
            </button>
            <button className="nav-btn" onClick={toggleMenu}>
              Pages
            </button>
            <button
              className="nav-btn"
              data-scroll-to="shop"
              onClick={() => {
                handleScrollTo("shop");
                toggleMenu();
              }}
            >
              Shop
            </button>
            <button className="nav-btn" onClick={toggleMenu}>
              Contact
            </button>
          </ul>
        </section>
      )}
    </>
  );
}

export default MenuBtn;
