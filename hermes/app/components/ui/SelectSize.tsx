'use client'

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { CartProduct, changeSizeInUserCart } from "@/app/rtk-slices/cartSlice";

type SelectSizeProps = {
  product: CartProduct
}

const SelectSize: React.FC<SelectSizeProps>  = ({product}) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const selectedProduct = cartItems.find((item) => item.id === product.id);
  const [selectedSize, setSelectedSize] = useState(selectedProduct!.size)
  const dispatch = useAppDispatch()
  const changeSize = (size: string) => {
    console.log('changing size')
    setSelectedSize(size)
    dispatch(changeSizeInUserCart({product, size}))
  }
  return (
    <Select>
      <SelectTrigger className="w-[60px] h-[30px] border-orange-300 text-xs text-orange-900 hover:bg-orange-200 transition-all duration-300">
        <SelectValue placeholder={`${selectedSize}`} className="text-xs"/>
      </SelectTrigger>
      <SelectContent className="text-orange-900 transition-all duration-300 bg-orange-50">
        <SelectItem value="XS" onClick={() => changeSize('XS')}>XS</SelectItem>
        <SelectItem value="S" onClick={() => changeSize('S')}>S</SelectItem>
        <SelectItem value="M" onClick={() => changeSize('M')}>M</SelectItem>
        <SelectItem value="L" onClick={() => changeSize('L')}>L</SelectItem>
        <SelectItem value="XL" onClick={() => changeSize('XL')}>XL</SelectItem>
        <SelectItem value="2XL" onClick={() => changeSize('2XL')}>2XL</SelectItem>
        <SelectItem value="3XL" onClick={() => changeSize('3XL')}>3XL</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectSize;
