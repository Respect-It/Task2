import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";
function Cart() {
  const {cart, setCart} = useContext(CartContext)
  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">🛒 Your Shopping Cart</div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
            <button onClick={() => handleDelete(item.id)} className="delete-button">Delete</button>
          </div>
        ))
      )}

      <div className="cart-footer">🧾 Thank you for shopping with us!</div>
    </div>
  );
};

export default Cart;
