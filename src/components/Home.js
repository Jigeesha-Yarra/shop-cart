import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./Home.css";

const Home = ({searchQuery}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filterProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="home container">
      <h1>Products</h1>
      <div className="product-list">
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;