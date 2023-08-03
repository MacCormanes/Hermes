import { CartContext, CartProduct } from "@/app/context/cart.context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext } from "react";

type ProductCardProps = {
  product: CartProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, thumbnail, imageUrls } = product;
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
  return (
    <div>
      <Image
        src={imageUrls[0]}
        blurDataURL={imageUrls[0]}
        alt={name}
        width={300}
        height={300}
        priority={true}
      />
      <h2>{name}</h2>
      <p>$ {price.toLocaleString()}</p>
      <Button onClick={addProductToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;
