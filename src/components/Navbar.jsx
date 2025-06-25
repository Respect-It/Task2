import React, { useState } from "react";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../App";

function Navbar() {
  const { cart, setCart } = useContext(CartContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar-logo">Mern Stack</div>
      </Link>
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
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

        <Link to="/cart">
          <i className="bi bi-cart"> {cart.length}</i>
        </Link>
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
