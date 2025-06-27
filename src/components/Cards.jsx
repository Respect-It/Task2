import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { CartContext } from "../App.jsx"; // Assuming CartContext is still in App.jsx

export default function Cards({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [showDetails, setShowDetails] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false); // To manage wishlist state

  // Truncates text to a specified maximum length, adding "..." if truncated.
  const truncateText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "...";

  // Handles adding the product to the cart if it's not already there.
  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
      alert(`${product.title} added to cart!`); // User feedback
    } else {
      alert(`${product.title} is already in your cart!`);
    }
  };

  // Toggles the wishlist status of the product.
  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    alert(`${product.title} ${isWishlisted ? 'removed from' : 'added to'} wishlist!`);
  };

  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-card-image"
          loading="lazy"
          onClick={handleAddToCart} // Clicking the image adds to cart
        />
        <div className="product-card-overlay">
          <button className="overlay-button cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="overlay-button wishlist-button" onClick={handleToggleWishlist}>
            {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
          {/* You can add more buttons here, e.g., "Quick View" */}
        </div>
      </div>

      <div
        className="product-card-info-button"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        {showDetails ? (
          <div className="product-card-details-popup">
            <h4 className="details-popup-title">{product.title}</h4>
            <p className="details-popup-price">PKR {product.price.toFixed(2)}</p>
            <p className="details-popup-description">{truncateText(product.description, 80)}</p>
          </div>
        ) : (
          <div className="product-card-price-tag">
            PKR {product.price.toFixed(2)}
          </div>
        )}
      </div>

      <div className="product-card-footer">
        <Link to={`/product/${product.id}`} className="product-card-title-link">
          <h3 className="product-card-title">{truncateText(product.title, 40)}</h3>
        </Link>
        <div className="product-card-rating">
          <Rating
            readonly={true}
            initialValue={product.rating.rate}
            allowFraction={true}
            size={20}
          />
          <span className="product-card-rating-count">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
}