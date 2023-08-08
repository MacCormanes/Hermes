"use client";

import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "@/firebase/firebase.utils";
import { SHOP_DATA } from "../SHOP_DATA";

type Product = {
  id: number;
  name: string;
  thumbnail: string;
  imageUrls: string[];
  price: number;
  realProductURL: string;
};


export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

/*
// Adding documents to firestore( fired only once )
useEffect(() => {
  addCollectionAndDocuments('categories', SHOP_DATA)
}, [])
*/


// function to fetch and create a category map from firestore db that only runs on mount
useEffect(() => {
  const getCategoriesMap = async () => {
    const categoryMap = await getCategoriesAndDocuments();
    console.log(categoryMap);
    setCategoriesMap(categoryMap);
  };
  getCategoriesMap();
}, []);

  const value = {
    categoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
