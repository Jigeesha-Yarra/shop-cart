import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useCart();

  const increaseQty = (item) => {
    dispatch({ type: "INCREASE_QTY", payload: item });
  };

  const decreaseQty = (item) => {
    dispatch({ type: "DECREASE_QTY", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  // Calculate total price
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="cart container">
      <h1>Cart</h1>
      {state.cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
          <div className="quantity-controls">
            <button onClick={() => decreaseQty(item)}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => increaseQty(item)}>+</button>
          </div>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <div className="total-price">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;