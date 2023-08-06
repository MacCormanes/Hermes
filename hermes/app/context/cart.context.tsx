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

const decrementCartItem = (cartItems: CartProduct[], productToDecrement: CartProduct) => {
  const existingCartItem = cartItems.find(
    (item:CartProduct) => item.id === productToDecrement.id
  )

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToDecrement.id)
  }

  return cartItems.map((item) => item.id === productToDecrement.id ? {...item, quantity: item.quantity - 1} : item)
}

const removeCartItem = (cartItems: CartProduct[], productToRemove: CartProduct) => {
  return cartItems.filter((item) => item.id !== productToRemove.id)
}

export const CartContext = createContext<{
  cartItems: CartProduct[];
  total: number;
  addItemToCart: (productToAdd: CartProduct) => void;
  decrementItemToCart: (productToDecrement: CartProduct) => void;
  removeItemInCart: (productToRemove: CartProduct) => void;
  cartCount: number;
}>({
  cartItems: [],
  total: 0,
  addItemToCart: () => {},
  cartCount: 0,
  decrementItemToCart: () => {},
  removeItemInCart: () => {},

});

export const CartProvider = ({ children }: ChildrenProps) => {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd: CartProduct) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementItemToCart = (productToDecrement: CartProduct) => {
    setCartItems(decrementCartItem(cartItems, productToDecrement));
  };

  const removeItemInCart = (productToRemove: CartProduct) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
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

  const value = { cartItems, total, addItemToCart, decrementItemToCart, removeItemInCart, cartCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
