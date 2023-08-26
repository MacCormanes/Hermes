"use client";

import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../context/categories.context";
import Navbar from "../components/Navbar";
import CategoryPreview from "./CategoryPreview";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="font-montserrat bg-gradient-to-b from-orange-300 via-orange-50 to-orange-300">
      <Navbar />
      <h1 className="block mt-3 mb-5 text-3xl font-semibold text-center pt-7 text-orange-950">Categories</h1>
      <div className="pb-12">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          console.log(products)
          return(
            <CategoryPreview key={title} title={title} products={products} />
          )
        })}
      </div>
    </div>
  );
};

export default Shop;
