"use client"

import { CartProduct } from "@/app/context/cart.context";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../rtk-slices/cartSlice'

export type ProductCardProps = {
  product: CartProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrls } = product;

  const dispatch = useDispatch()
  return (
    <div className="mb-5 font-montserrat">
      <div className="relative inline-block">
        <Image
          src={imageUrls[0]}
          blurDataURL={imageUrls[0]}
          alt={name}
            width={500}
            height={500}
          priority={true}
          className="transition-all duration-700 shadow-md rounded-xl shadow-slate-900/30"
        />
        <Image
          src={imageUrls[1]}
          blurDataURL={imageUrls[1]}
          alt={name}
          width={500}
          height={500}
          priority={true}
          className="absolute inset-0 transition-all duration-700 ease-in-out shadow-xs opacity-0 hover:opacity-100 rounded-xl shadow-slate-900/30"
        />
      </div>
      <div className="flex gap-1 mt-2">
        <div className="w-2/3">
          <h2 className="whitespace-normal">{name}</h2>
          <p>$ {price.toLocaleString()}</p>
        </div>
        <Button onClick={() => dispatch(addItemToCart(product))} className="w-1/3 py-2 text-xs text-orange-900 transition-all duration-500 bg-orange-200 border border-orange-900 whitespace-nowrap hover:scale-105 hover:bg-orange-300">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
