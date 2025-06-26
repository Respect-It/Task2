import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../App";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo.png"; // ✅ Import the logo

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="Shopify Logo" className="navbar-logo" />
      </Link>
      <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/about">About</Link>

        <div className="dropdown" onClick={toggleDropdown}>
          <span className="dropdown-toggle">Products</span>
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
        <DarkModeToggle />
      </div>

      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
