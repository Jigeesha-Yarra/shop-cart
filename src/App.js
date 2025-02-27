import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Header earchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;