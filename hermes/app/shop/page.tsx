"use client";

import CategoryPreview from "./CategoryPreview";
import { useAppSelector } from "../store/store";

const Shop = () => {
  const categoriesMap = useAppSelector(state => state.categories.categoriesMap)
  return (
    <div className="h-full font-montserrat bg-gradient-to-b from-orange-200 via-orange-100 to-orange-300">
      <h1 className="block mb-5 text-3xl font-semibold text-center pt-7 text-orange-950">Categories</h1>
      <div className="pb-12">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return(
            <div key={title} >
              <CategoryPreview title={title} products={products} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Shop;
