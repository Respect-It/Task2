import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { products } from "../data"; // Assuming 'products' is imported correctly
import { Rating } from "react-simple-star-rating";
import { CartContext } from "../App.jsx"; // Import CartContext

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate hook
  const { cart, setCart } = useContext(CartContext); // Get cart and setCart from context

  // Find the product using strict equality and parsing the ID
  const product = products.find((item) => item.id === parseInt(id));

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="detail-container no-product-found">
        <h1 className="not-found-title">Product Not Found</h1>
        <p className="not-found-message">The product you are looking for does not exist or has been removed.</p>
        <button className="btn-primary go-home-btn" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  }

  // Handle adding product to cart
  const handleAddToCart = () => {
    // Check if the item is already in the cart (you might want to allow multiple quantities later)
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]); // Add product with default quantity of 1
      alert(`${product.title} has been added to your cart!`); // Simple feedback
    } else {
      alert(`${product.title} is already in your cart!`); // Feedback for existing item
      // Alternatively, if you want to increment quantity:
      // setCart(prevCart => prevCart.map(item =>
      //   item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      // ));
    }
  };

  return (
    <div className="detail-container">
      <div className="product-image-wrapper"> {/* Changed class for better styling */}
        <img src={product.image} alt={product.title} className="detail-product-image" /> {/* Added class */}
      </div>
      <div className="detail-product-info"> {/* Renamed for more specificity */}
        <h1 className="detail-product-title">{product.title}</h1> {/* Added class for H1 */}
        <p className="detail-product-description">{product.description}</p>
        <strong className="detail-product-price">PKR {product.price.toFixed(2)}</strong>

        <div className="detail-product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>

          <div className="detail-product-rating">
            <Rating readonly={true} allowFraction={true} initialValue={product.rating.rate} size={24} /> {/* Added size */}
            <span className="rating-count">({product.rating.count} reviews)</span> {/* Added count */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;