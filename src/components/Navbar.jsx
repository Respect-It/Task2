import React, { useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mern Stack</div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-toggle">Products </span>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/Men's Product">Men's Product</Link>
              <Link to="/Women's Product">Women's Product</Link>
              <Link to="/Categories">All Categories</Link>
            </div>
          )}
        </div>

        <Link to="/contact">Contact Us</Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
