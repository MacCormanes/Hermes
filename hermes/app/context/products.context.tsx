"use client";

import { createContext, useState } from "react";
import SHOP_DATA from "../SHOP_DATA.json";

type Product = {
  id: number;
  name: string;
  thumbnail: string;
  imageUrls: string[];
  price: number;
  realProductURL: string;
}

export const ProductsContext = createContext<{ products: Product[] }>({
  products: [],
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<Product[]>(SHOP_DATA);
  const value = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
