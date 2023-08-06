import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    email: string;
  name: string;
  cardNumber: number;
  confirmPassword: string;
};

const PaymentForm = () => {
  const onSubmit = () => {};
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, co } = form;
  const { errors } = formState;

  return (
    <div className="w-2/3 pt-10 mx-auto mt-12">
      <Button className="w-full">Stripe</Button>
      <div className="relative flex items-center justify-center">
        <span className="absolute px-2 bg-orange-50">OR</span>
        <Separator className="my-10 h-[2px] bg-orange-300" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label className="text-base">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          className=""
          {...register("email", {
            required: "We need your cool email address.",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.email?.message}
        </p>

        <Label htmlFor="name" className="text-base">
          Name on card
        </Label>
        <Input
          type="text"
          id="name"
          className=""
          {...register("name", {
            required: "A name is required",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.name?.message}
        </p>

        <Label htmlFor="number" className="text-base">
          Card Number
        </Label>
        <Input
          type="text"
          id="card-number"
          className=""
          placeholder="1234 1234 1234 1234"
          {...register("cardNumber", {
            maxLength: 16,
            minLength: 15,
            required: "A password should be given.",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.cardNumber?.message}
        </p>

        <Label htmlFor="confirmPassword" className="text-base">
          Confirm Password
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          className=""
          {...register("confirmPassword", {
            required: "Woops! Please confirm your password.",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.confirmPassword?.message}
        </p>

        <Button
          type="submit"
          className="w-full mt-5 text-xs uppercase transition-all duration-500 bg-orange-400 shadow-md text-orange-950 hover:bg-orange-300"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
