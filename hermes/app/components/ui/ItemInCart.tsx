import React from 'react';
import { CartProduct } from '@/app/context/cart.context';

type ItemInCartProps = {
  product: CartProduct;
};

const ItemInCart: React.FC<ItemInCartProps> = ({ product }) => {
  const { name, quantity } = product;
  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default ItemInCart;
