"use client";

import { CategoriesContext } from "@/app/context/categories.context";
import { useContext } from "react";
import CategoryView from "./CategoryView";
import Navbar from "@/app/components/Navbar";

type ParamsType = {
  category: string;
};

type CategoryProps = {
  params: ParamsType;
};

const Category = ({ params }: CategoryProps) => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="bg-gradient-to-b from-orange-300 via-orange-50 to-orange-300 pb-12">
        {Object.keys(categoriesMap).map((key) => {
          if (key === params.category) {
            const products = categoriesMap[key];
            return <CategoryView key={key} title={key} products={products} />;
          }
        })}
      </div>
    </div>
  );
};

export default Category;
