"use client";

import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "@/firebase/firebase.utils";
import { CartProduct } from "./cart.context";

type CategoriesMapType = {
  [title: string]: CartProduct[]
}

type CategoriesContextType = {
  categoriesMap: CategoriesMapType
  setCategoriesMap: React.Dispatch<React.SetStateAction<CategoriesMapType>>
}

export const CategoriesContext = createContext({} as CategoriesContextType)

export const CategoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMapType>({});

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
    setCategoriesMap
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
