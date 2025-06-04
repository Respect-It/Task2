import { useState } from 'react';

export default function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-fullwidth" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="hello">
          <img src="https://png.pngtree.com/element_our/20190530/ourmid/pngtree-shuffle-icon-image_1257310.jpg" alt="Logo" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Categories</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">Top Products</a>
              <a className="navbar-item is-selected">Ratings</a>
              <a className="navbar-item">Contact Us</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary"><strong>Sign up</strong></a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
