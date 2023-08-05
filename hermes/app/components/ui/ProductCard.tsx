import { CartContext, CartProduct } from "@/app/context/cart.context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext, useState } from "react";

type ProductCardProps = {
  product: CartProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrls } = product;

  return (
    <div className="mb-5">
      <div className="relative inline-block">
        <Image
          src={imageUrls[0]}
          blurDataURL={imageUrls[0]}
          alt={name}
          width={300}
          height={300}
          priority={true}
          className="transition-all duration-700 shadow-md rounded-xl shadow-slate-900/30"
        />
        <Image
          src={imageUrls[1]}
          blurDataURL={imageUrls[1]}
          alt={name}
          width={300}
          height={300}
          priority={true}
          className="absolute inset-0 transition-all duration-700 ease-in-out shadow-xs opacity-0 hover:opacity-100 rounded-xl shadow-slate-900/30"
        />
      </div>
      <h2 className="whitespace-normal">{name}</h2>
      <p>$ {price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
