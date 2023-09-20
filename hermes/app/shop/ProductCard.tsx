import Link from "next/link";
import Image from "next/image";

import { CartProduct, addCartToUserCart } from "../rtk-slices/cartSlice";
import { useAppDispatch } from "@/app/store/store";
import { Button } from "@/components/ui/button";

export type ProductCardProps2 = {
  product: CartProduct;
  category: string;
};

const ProductCard: React.FC<ProductCardProps2> = ({ product, category }) => {
  const { name, price, imageUrls, size } = product;

  /*
  const dispatch = useAppDispatch()
  
  const handleAdd = () => {
    dispatch(addCartToUserCart({product, size}))
  }
  */
  return (
    <div className="mb-5 font-montserrat">
      <Link key={product.id} href={`/shop/${category}/${product.id}`}>
        <div className="relative inline-block w-64 mb-1">
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
      </Link>
      <div className="flex justify-between">
        <div className="grid">
          <Link key={product.id} href={`/shop/${category}/${product.id}`}>
            <h2 className="text-sm">{name}</h2>
          </Link>
          <Link key={product.id} href={`/shop/${category}/${product.id}`}>
            <p className="text-lg font-medium text-orange-900">
              $ {price.toLocaleString()}
            </p>
          </Link>
        </div>
        {/*
        <Button onClick={handleAdd}>Add to cart</Button>
        */}
      </div>
    </div>
  );
};

export default ProductCard;
