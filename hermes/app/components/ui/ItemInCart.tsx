import React from "react";
import { CartProduct } from "@/app/context/cart.context";
import Image from "next/image";

type ItemInCartProps = {
  product: CartProduct;
};

const ItemInCart: React.FC<ItemInCartProps> = ({ product }) => {
  const { imageUrls, price, name, quantity } = product;
  return (
    <div className="flex items-center gap-3 mb-5 text-slate-500">
      <div className="flex justify-center w-2/5">
        <Image
          src={imageUrls[0]}
          alt={name}
          width={100}
          height={100}
          className="rounded-md shadow-sm shadow-slate-900/30"
        />
      </div>
      <div className="flex flex-col w-3/5 align-baseline">
        <h2 className="text-base text-orange-950">{name}</h2>
        <span>
          Quantity:{" "}
          <span className="text-base text-orange-950">{quantity}</span>
        </span>
        <span>
          Unit Price: <span className="text-base text-orange-950">$ {price.toLocaleString()}</span>
        </span>
      </div>
    </div>
  );
};

export default ItemInCart;
