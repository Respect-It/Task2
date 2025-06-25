import React from "react";
import { useContext } from "react";
import { CartContext } from "../App";
function Cart() {
  const {cart, setCart} = useContext(CartContext)
  return (
    <div>
      <center>{cart.map(item=>
      <h2 key={item.id}>{item.title}</h2>
      )}</center>
    </div>
  );
}

export default Cart;
