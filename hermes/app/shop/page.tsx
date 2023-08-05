"use client";

import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../context/products.context";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ui/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-6 p-10 bg-orange-50">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
