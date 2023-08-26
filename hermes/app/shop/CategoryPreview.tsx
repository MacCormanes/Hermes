import Link from "next/link";
import ProductCard from "../components/ui/ProductCard";
import { CartProduct } from "../rtk-slices/cartSlice";

export type CategoryPreviewProps = {
  title: string;
  products: CartProduct[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className="px-10 pb-5 font-montserrat">
      <div className="flex items-baseline justify-between">
        <Link href={`/shop/${title}`}>
          <h2 className="mb-3 text-2xl font-medium text-orange-950">
            {title.toUpperCase()}
          </h2>
        </Link>
        <Link href={`/shop/${title}`} className="text-lg font-medium text-orange-800">Show more...</Link>
      </div>
      <div
        data-te-perfect-scrollbar-init
        data-te-suppress-scroll-y="true"
        id="init-by-js"
        className="grid grid-cols-4 gap-7"
      >
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        
      </div>
    </div>
  );
};

export default CategoryPreview;
