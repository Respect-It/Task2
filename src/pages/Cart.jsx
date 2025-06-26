import React, { useContext, useState } from "react";
import { CartContext } from "../App";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  // Handle item removal
  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Handle quantity change
  const handleQuantityChange = (id, operation) => {
    setQuantities(prev => {
      const updatedQuantities = { ...prev };
      updatedQuantities[id] = operation === 'increase'
        ? (updatedQuantities[id] || 1) + 1
        : Math.max(1, (updatedQuantities[id] || 1) - 1); // Prevent 0 quantity
      return updatedQuantities;
    });
  };

  // Calculate the total price of items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * (quantities[item.id] || 1)), 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-details">
                <h4>{item.title}</h4>
                <p className="item-price">${item.price}</p>
                <div className="quantity-controls">
                  <button 
                    className="quantity-button" 
                    onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                  <input 
                    type="number" 
                    value={quantities[item.id] || 1} 
                    min="1" 
                    readOnly 
                    className="quantity-input" />
                  <button 
                    className="quantity-button" 
                    onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                </div>
              </div>
              <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <div className="summary-row">
          <span className="summary-label">Subtotal:</span>
          <span className="summary-value">${getTotalPrice()}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">Taxes (5%):</span>
          <span className="summary-value">${(getTotalPrice() * 0.05).toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span className="summary-label">Total:</span>
          <span className="summary-value">${(getTotalPrice() * 1.05).toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>

      <div className="cart-footer">🧾 Thank you for shopping with us!</div>
    </div>
  );
}

export default Cart;
