import SelectSize from "@/app/components/ui/SelectSize";
import { useAppDispatch } from "@/app/store/store";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { addItemToCart, decrementItemToCart, removeItemToCart } from "@/app/rtk-slices/cartSlice";
import { ProductCardProps1 } from "@/app/components/ui/ItemInCartDropdown";

const CheckoutProductCard: React.FC<ProductCardProps1> = ({ product }) => {
  const { name, price, quantity, imageUrls } = product;
  
  const dispatch = useAppDispatch()

  const handleDecrement = () => dispatch(decrementItemToCart(product));
  const handleIncrement = () => dispatch(addItemToCart(product));
  const handleRemoveItem = () => dispatch(removeItemToCart(product));

  return (
    <div className="flex items-center p-3 ml-5 font-montserrat text-slate-500">
      <div className="flex justify-center mr-5">
        <Image
          src={imageUrls[0]}
          alt={name}
          width={150}
          height={150}
          className="rounded-md shadow-sm shadow-slate-900/50"
        />
      </div>
      <div className="relative flex flex-col h-[150px] w-3/5">
        <div className="flex justify-between">
          <h2 className="w-10/12 text-lg font-medium text-orange-950">{name}</h2>
          <button className="relative w-2/12 h-[30px]">
            <Image
              src="/icons/trash.svg"
              alt=""
              fill
              sizes="10vw"
              className="absolute inset-0 transition-all duration-300 hover:scale-125"
              onClick={handleRemoveItem}
            />
          </button>
        </div>
        <span className="mb-1 text-base text-orange-950">
          $ {price.toLocaleString()}
        </span>
        <SelectSize />
        <div className="absolute bottom-0 left-0 text-orange-900 transition-all duration-300 border border-orange-300 rounded-md">
          <Button
            variant="outline"
            className="h-[26px] p-1 m-0 bg-transparent border-none text-base px-2 items-center hover:bg-orange-100 group transition-all duration-300"
            onClick={handleDecrement}
          >
            <span className="transition-all duration-300 group-hover:scale-150 group-hover:text-orange-900">
              -
            </span>
          </Button>
          <span className="items-center px-2 py-1 text-sm border-none pointer-events-none">
            {quantity}
          </span>
          <Button
            variant="outline"
            className="h-[26px] p-1 m-0 bg-transparent border-none text-base px-2 items-center hover:bg-transparent group transition-all duration-300"
            onClick={handleIncrement}
          >
            <span className="transition-all duration-300 group-hover:scale-150 group-hover:text-orange-900">
              +
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
