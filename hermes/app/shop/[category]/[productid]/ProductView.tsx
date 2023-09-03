"use client";

import { CartProduct } from "@/app/rtk-slices/cartSlice";
import Image from "next/image";
import React, { useState } from "react";

type ProductViewProps = {
  product: CartProduct;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const sizes = [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ];
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
            <Image
              src={product.imageUrls[0]}
              blurDataURL={product.imageUrls[0]}
              alt={product.name}
              width={500}
              height={500}
              priority={true}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src={product.imageUrls[1]}
                blurDataURL={product.imageUrls[1]}
                alt={product.name}
                width={500}
                height={500}
                priority={true}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
              <Image
                src={product.imageUrls[2]}
                blurDataURL={product.imageUrls[2]}
                alt={product.name}
                width={500}
                height={500}
                priority={true}
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <Image
              src={product.imageUrls[3]}
              blurDataURL={product.imageUrls[3]}
              alt={product.name}
              width={500}
              height={500}
              priority={true}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>
          </div>

          <button
            type="button"
            className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to bag
          </button>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">
                Exercitation sit sint anim velit et nisi occaecat ad elit ad
                mollit labore nostrud incididunt. Et proident labore fugiat
                exercitation consequat magna magna occaecat labore laboris. Amet
                aute occaecat sint ut fugiat Lorem. Velit cupidatat non laborum
                aliquip qui.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                <li>
                  <span>
                    Labore dolor amet aliquip cupidatat et Lorem minim labore
                    qui magna occaecat culpa.
                  </span>
                </li>
                <li>
                  <span>
                    Labore dolor amet aliquip cupidatat et Lorem minim labore
                    qui magna occaecat culpa.
                  </span>
                </li>
                <li>
                  <span>
                    Labore dolor amet aliquip cupidatat et Lorem minim labore
                    qui magna occaecat culpa.
                  </span>
                </li>
                <li>
                  <span>
                    Labore dolor amet aliquip cupidatat et Lorem minim labore
                    qui magna occaecat culpa.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                Eiusmod exercitation nisi cillum eu tempor id aliquip ut magna
                aliquip aliqua minim velit. Enim consectetur in enim cupidatat
                irure et nisi. Lorem ea sint ex velit sint. Sint dolore
                voluptate incididunt voluptate sunt amet qui culpa pariatur qui.
                Ad nostrud sint pariatur labore proident reprehenderit proident
                ea ipsum sint est in id pariatur. Cillum nisi mollit irure eu
                pariatur elit anim et cupidatat duis nulla culpa occaecat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
