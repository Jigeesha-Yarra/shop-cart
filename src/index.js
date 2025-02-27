import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM.createRoot for React 18
import App from "./App";
import { CartProvider } from "./context/CartContext"; // Correct import path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);