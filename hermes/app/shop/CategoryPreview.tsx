"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { CartProduct } from "../rtk-slices/cartSlice";
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";
import Image from "next/image";
import arrowRight from "../../public/icons/right-arrow-thin.svg";
import arrowLeft from '../../public/icons/left-arrow-thin.svg'

export type CategoryPreviewProps = {
  title: string;
  products: CartProduct[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false);

  const scrollToRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const currentScrollLeft = container.scrollLeft;
      const scrollAmount = 520;

      const newScrollLeft = currentScrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const currentScrollLeft = container.scrollLeft;
      const scrollAmount = 520;

      const newScrollLeft = currentScrollLeft - scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
  }};

  return (
    <div className="relative px-10 pb-5 font-montserrat">
      <div className="flex items-baseline justify-between">
        <Link href={`/shop/${title}`}>
          <h2 className="mb-3 text-2xl font-medium text-orange-950">
            {title.toUpperCase()}
          </h2>
        </Link>
        <Link
          href={`/shop/${title}`}
          className="text-lg font-medium text-orange-800"
        >
          Show more...
        </Link>
      </div>
      <div className="flex overflow-x-auto gap-7" ref={containerRef}>
        {products
          .filter((_, idx) => idx < 8)
          .map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
                category={title}
              />
            );
          })}
        <button
          onClick={scrollToRight}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-24 m-10 rounded-lg h-80 hover:bg-white/40"
        >
          <Image src={arrowRight} alt="arrow-right" className="" />
        </button>

        <button
          onClick={scrollToLeft}
          className="absolute inset-y-0 left-0 flex items-center justify-center w-24 m-10 rounded-lg h-80 hover:bg-white/40"
        >
          <Image src={arrowLeft} alt="arrow-right" className="" />
        </button>
      </div>
      <Separator className="" />
    </div>
  );
};

export default CategoryPreview;
