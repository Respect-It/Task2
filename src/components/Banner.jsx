import React from 'react';
import banner from '../assets/banner.webm';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <video
        className="banner-image"
        src={banner}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      <button className="shop-genie-btn">Shop Now</button>
    </section>
  );
};

export default Banner;
