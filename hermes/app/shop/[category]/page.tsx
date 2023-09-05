"use client";

import CategoryView from "./CategoryView";
import Navbar from "@/app/components/Navbar";
import BackToTopButton from "@/app/components/ui/Animations/BackToTopButton";
import { useAppSelector } from "@/app/store/store";

type ParamsType = {
  category: string;
};

type CategoryProps = {
  params: ParamsType;
};

const Category = ({ params }: CategoryProps) => {
 const categoriesMap = useAppSelector(state => state.categories.categoriesMap)
  return (
    <div className="font-montserrat">
      <Navbar />
      <div className="pb-12 bg-gradient-to-b from-orange-200 via-orange-100 to-orange-300">
        {Object.keys(categoriesMap).map((key) => {
          if (key === params.category) {
            const products = categoriesMap[key];
            console.log(key)
            return <CategoryView key={key} title={key} products={products} />;
          }
        })}
      </div>
      <BackToTopButton />
    </div>
  );
};

export default Category;
