import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom"; // Use HashRouter
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/shop-cart"> {/* Add basename */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;