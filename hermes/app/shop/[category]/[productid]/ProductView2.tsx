"use client";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useAppDispatch } from "@/app/store/store";
import { addCartToUserCart } from "@/app/rtk-slices/cartSlice";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type CartProduct = {
  id: string;
  name: string;
  thumbnail: string;
  imageUrls: string[];
  price: number;
  quantity: number;
  size: string;
  realProductURL: string;
};

type ProductViewProps = {
  product: CartProduct;
  category: string;
};

const ProductView2: React.FC<ProductViewProps> = ({ product, category }) => {
  const dispatch = useAppDispatch()

  const breadcrumbCategory = category === 'mens' ? 'Mens' : 'Womens'
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
  const colors = [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ];

  const breadcrumbs = [
    { id: 1, name: "Categories", href: "/shop" },
    { id: 2, name: `${breadcrumbCategory}`, href: `/shop/${category}` },
  ];

  const [selectedSize, setSelectedSize] = useState(sizes[2]);

  const handleSubmit = () => {
    dispatch(addCartToUserCart({product, size: selectedSize.name}))
  }

  return (
    <div className="bg-gradient-to-b from-orange-200 via-orange-100 to-orange-300">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <Link
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </Link>
                  <Separator orientation="vertical" className="h-5 bg-orange-600"/>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href=""
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="hidden overflow-hidden rounded-lg shadow-lg aspect-h-4 aspect-w-3 lg:block shadow-black/40">
            <Image
              src={product.imageUrls[1]}
              alt={product.name}
              width={800}
              height={800}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="overflow-hidden rounded-lg shadow-md aspect-h-2 aspect-w-3 shadow-black/40">
            <Image
              src={product.imageUrls[2]}
              alt={product.name}
              width={800}
              height={800}
              className="object-cover object-center w-full h-full"
              />
            </div>
            {product.imageUrls[3] ? ( 
            <div className="overflow-hidden rounded-lg shadow-md aspect-h-2 aspect-w-3 shadow-black/40">
            <Image
              src={product.imageUrls[3]}
              alt={product.name}
              width={800}
              height={800}
              className="object-cover object-center w-full h-full"
              />
            </div> ): (<></>)}
          </div>

          <div className="shadow-lg aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg shadow-black/40">
          <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={800}
              height={800}
              className="object-cover object-center w-full h-full"
            /> 
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-orange-700 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-orange-950 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-orange-950">
              $ {product.price.toLocaleString()}
            </p>

            <div className="mt-10">
              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-orange-950">Size</h3>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-orange-100 text-orange-950 shadow-sm"
                              : "cursor-not-allowed bg-orange-50 text-orange-200 pointer-events-none",
                            active ? "ring-2 ring-orange-500 bg-orange-300" : "",
                            "transition-all duration-500 group relative flex items-center justify-center rounded-md border border-orange-800 py-3 px-4 text-sm font-medium uppercase hover:bg-orange-300 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                              >
                                <svg
                                  className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="button"
                onClick={() => handleSubmit()}
                className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white transition-all duration-500 bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-orange-700 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  Nulla do mollit consequat incididunt laboris aute duis nostrud
                  veniam officia id proident. Mollit non ad veniam mollit anim
                  ut commodo. In Lorem voluptate eu dolor dolore. Minim duis
                  Lorem excepteur mollit Lorem dolore veniam deserunt ut ut nisi
                  nisi. Fugiat sunt sit est ea veniam voluptate officia ad
                  mollit officia cupidatat amet dolor. Culpa enim dolore ut ea
                  ea mollit non deserunt.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  <li>
                    <span>
                      Qui amet laboris velit veniam Lorem est duis sint sint
                      duis eu.
                    </span>
                  </li>
                  <li>
                    <span>
                      Qui amet laboris velit veniam Lorem est duis sint sint
                      duis eu.
                    </span>
                  </li>
                  <li>
                    <span>
                      Qui amet laboris velit veniam Lorem est duis sint sint
                      duis eu.
                    </span>
                  </li>
                  <li>
                    <span>
                      Qui amet laboris velit veniam Lorem est duis sint sint
                      duis eu.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-orange-900">
                  Lorem ex anim qui eu quis. Do veniam consectetur mollit sit
                  esse anim laborum Lorem. Culpa nisi do ullamco occaecat velit
                  adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView2;
