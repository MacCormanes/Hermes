"use client";

import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../context/categories.context";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ui/ProductCard";
import { CartProduct } from "../context/cart.context";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="font-spline">
      <Navbar />
      <div className=" bg-gradient-to-b from-orange-300 via-orange-50 to-orange-300">
        {Object.keys(categoriesMap).map((title) => {
          return (
            <div key={title}>
              <h2 className="px-10 pt-10 mb-3">{title.toUpperCase()}</h2>
              <div className="grid grid-cols-4 gap-6 px-10">
                {categoriesMap[title].map((product: CartProduct) => (
                  <div key={product.id}>
                    <ProductCard product={product} key={product.id} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
