import Link from "next/link";
import { CategoryPreviewProps } from "../CategoryPreview";
import ProductCard from "@/app/components/ui/ProductCard";

const CategoryView = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className="px-10 pt-7 font-montserrat">
      <h2 className="mb-3 font-semibold text-[35px] text-orange-950 text-center">
        {title.toUpperCase()}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {products.map((product) => {
          return (
            <ProductCard product={product} category={title} key={product.id} />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryView;
