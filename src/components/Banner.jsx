import React, { useState, useEffect } from "react";
// Import images statically (adjust the paths as needed)
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const bannerData = [
  {
    id: 1,
    title: "Welcome to Our Website!",
    description: "Enjoy amazing products and great offers.",
    image: banner1,
  },
  {
    id: 2,
    title: "Summer Sale!",
    description: "Get up to 50% off on select items.",
    image: banner2,
  },
  {
    id: 3,
    title: "New Arrivals!",
    description: "Check out the latest additions to our store.",
    image: banner3,
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerData.map((banner) => (
          <div
            className="slide"
            key={banner.id}
            style={{ backgroundImage: `url(${banner.image})` }}
          >
            <div className="slide-content">
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
