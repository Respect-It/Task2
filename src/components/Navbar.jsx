import React, { useState } from 'react';

const Navbar = () => {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mern Stack</div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-toggle">Services </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/web">Full Stack Web Development</a>
              <a href="/app">App Development</a>
              <a href="/seo">SEO</a>
            </div>
          )}
        </div>

        <a href="/contact">Contact Us</a>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
