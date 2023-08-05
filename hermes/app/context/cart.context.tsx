"use client";

import { createContext, useEffect, useState } from "react";

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
  cartCount: number;
}>({
  cartItems: [],
  total: 0,
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd: CartProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const totalCount = cartItems.reduce(
      (accumulator, { quantity }) => accumulator + quantity,
      0
    );
    setCartCount(totalCount);
    const totalCartValue = cartItems.reduce(
      (accumulator, item) => accumulator + (item.price * item.quantity),0
    );
    setTotal(totalCartValue);
  }, [cartItems]);

  const value = { cartItems, total, addItemToCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
