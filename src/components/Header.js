import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Imported useCart
import "./Header.css";

const Header = ({ searchQuery, setSearchQuery }) => {
  const { state } = useCart(); // Access cart state

  // Calculate total number of items in the cart
  const totalItems = state.cart.reduce((total, item) => total + item.qty, 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          Shop Cart
        </Link>
        <div>
          <input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">
            Cart {totalItems > 0 && <span className="cart-count">({totalItems})</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;