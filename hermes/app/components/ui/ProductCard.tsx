import Image from 'next/image';
import React from 'react';

interface Product {
  name: string;
  price: number;
  thumbnail: string;
  imageUrls: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price, thumbnail, imageUrls } = product;

  return (
    <div>
      <Image src={imageUrls[0]} blurDataURL={imageUrls[0]} alt={name} width={200} height={200} priority={true}/>
      <h2>{name}</h2>
      <p>$ {price.toLocaleString()}</p>
      {/* You can render additional information here, if needed */}
    </div>
  );
};

export default ProductCard;
