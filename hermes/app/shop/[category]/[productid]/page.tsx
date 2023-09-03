"use client";

import { useAppSelector } from "@/app/store/store";
import React from "react";
import ProductView2 from "./ProductView2";

const Page = ({
  params,
}: {
  params: { category: string; productid: string };
}) => {
  const categoriesMap = useAppSelector(
    (state) => state.categories.categoriesMap
  );
  const productId = parseInt(params.productid)
  const products = categoriesMap[params.category]
  const product = products.find(item => item.id === productId)

  // Check if product is defined before passing it as a prop
  return (
    <div>
      {product ? (
        <ProductView2 product={product} category={params.category}/>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page;
