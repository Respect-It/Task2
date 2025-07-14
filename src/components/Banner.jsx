import React from 'react';
import banner1 from '../assets/banner1.jpg'
import '../styles/Banner.css'
const Banner = () => {
  return (
    <section className="banner">
      <img
        src={banner1} // <-- Replace with actual image path or use import
        alt="Well-dressed model"
        className="banner-image"
      />

      <button className="shop-genie-btn">Shop Now</button>
    </section>
  );
};

export default Banner;
