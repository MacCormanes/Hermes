"use client";

import { Children, createContext, useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

export type CartProduct = {
  id: number;
  name: string;
  thumbnail: string;
  imageUrls: string[];
  price: number;
  quantity: number;
  realProductURL: string;
};

const addCartItem = (cartItems: CartProduct[], productToAdd: CartProduct) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<{
  cartItems: CartProduct[];
  total: number;
  addItemToCart: (productToAdd: CartProduct) => void;
}>({
  cartItems: [],
  total: 0,
  addItemToCart: () => {},
});

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd: CartProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { cartItems, total, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
