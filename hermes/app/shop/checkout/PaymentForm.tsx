import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  address: string;
  contact: number;
};

const PaymentForm = () => {
  const onSubmit = () => {};
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <div className="w-2/3 pt-10 mx-auto mt-12">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Label className="text-base" htmlFor="firstName">
          First Name
        </Label>
        <Input
          type="text"
          id="firstName"
          className=""
          {...register("firstName", {
            required: "We need your name",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.firstName?.message}
        </p>

        <Label htmlFor="lastName" className="text-base">
          Last Name
        </Label>
        <Input
          type="text"
          id="lastName"
          className=""
          {...register("lastName", {
            required: "A name is required",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.lastName?.message}
        </p>

        <Label htmlFor="address" className="text-base">
          Address
        </Label>
        <Input
          type="text"
          id="address"
          className=""
          placeholder="1234 1234 1234 1234"
          {...register("address", {
            maxLength: 16,
            minLength: 15,
            required: "A password should be given.",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.address?.message}
        </p>

        <Label htmlFor="contact" className="text-base">
          Contact Number
        </Label>
        <Input
          type="password"
          id="contact"
          className=""
          {...register("contact", {
            required: "Woops! Please confirm your password.",
          })}
        />
        <p className="mt-1 mb-2 text-xs font-medium text-red-400">
          {errors.contact?.message}
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
