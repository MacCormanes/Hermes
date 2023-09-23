"use client";

import Lottie from "lottie-react";
import ps from "./ps.json";
import fireworks from './fireworks.json'
import { useAppDispatch } from "@/app/store/store";
import { useEffect } from "react";
import { emptyUserCart } from "@/app/rtk-slices/cartSlice";

const Example = () => {
  const style1 = {
    height: 400,
  };
  const style2 = {
    height: 800,
  };
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(emptyUserCart())
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-gradient-to-t from-orange-100 to-orange-200 w-[100vw] h-[100vh]">
      <div className="py-10 mt-10"></div>
      <h1 className="mt-10 text-3xl font-semibold text-orange-900 font-montserrat">Payment Successful</h1>
      <Lottie animationData={ps} style={style1} />
      <div className="absolute">

      <Lottie animationData={fireworks} loop={false} style={style2} />
      </div>
    </div>
  );
};

export default Example;
