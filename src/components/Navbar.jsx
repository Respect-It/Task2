import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import DarkModeToggle from "./DarkModeToggle";
import logo from "../assets/logo.png"; 
import '../styles/Navbar.css'

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Shopify Logo" className="navbar-logo-img" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {/* About Link */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
              >
                Products
              </a>
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/Men's Product" className="dropdown-item">
                    Men's Product
                  </Link>
                </li>
                <li>
                  <Link to="/Women's Product" className="dropdown-item">
                    Women's Product
                  </Link>
                </li>
                <li>
                  <Link to="/Categories" className="dropdown-item">
                    All Categories
                  </Link>
                </li>
              </ul>
            </li>

            {/* Cart Link */}
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <i className="bi bi-cart-fill"></i>
                <span className="cart-count">{cart.length}</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/login" className="nav-link">
              <i className="bi bi-person-circle"></i>
              </Link>
            </li>
            <li className="nav-item">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
