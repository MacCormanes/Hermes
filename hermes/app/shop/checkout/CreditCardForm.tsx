import { setCustomerDetailsPage } from "@/app/rtk-slices/cartSlice";
import { useAppDispatch } from "@/app/store/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { object, number, string } from "yup";

type CreditCardFormData = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  province: string;
  postalCode: number;
};

const schema = object().shape({
  firstName: string().required("First name is required").min(1),
  lastName: string().required("Last name is required").min(1),
  address: string().required("We need your delivery address"),
  city: string().required("We need your city"),
  province: string().required("We need your state/province"),
  postalCode: number().required("We need your postal code").min(1).max(9999),
});

const CreditCardForm = () => {
  const dispatch = useAppDispatch()

  const { handleSubmit, control, formState } = useForm<CreditCardFormData>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const handleTransition = () => {
    dispatch(setCustomerDetailsPage())
  }

  return (
    <form
      onSubmit={handleSubmit(handleTransition)}
      className="flex flex-col justify-center gap-3 mx-auto my-12 lg:my-56 lg:w-96 sm:w-96 w-80"
    >
      <h1 className="text-xl font-semibold text-center text-orange-900">Required Payment Details</h1>
      <div>
        <Label className="text-orange-950/70">First Name</Label>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className="shadow-inner shadow-black/40"
              placeholder="Tony"
            />
          )}
        />
        <p className="text-sm font-medium text-red-500">{errors.firstName?.message}</p>
      </div>
      <div>
        <Label className="text-orange-950/70">Last Name</Label>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className="shadow-inner shadow-black/20"
              placeholder="Stark"
            />
          )}
        />
        <p className="text-sm font-medium text-red-500">{errors.lastName?.message}</p>
      </div>
      <div>
        <Label className="text-orange-950/70">Address</Label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className="shadow-inner shadow-black/20"
              placeholder="Your backyard"
            />
          )}
        />
        <p className="text-sm font-medium text-red-500">{errors.address?.message}</p>
      </div>
      <div className="flex gap-4">
        <div>
          <Label className="text-orange-950/70">City</Label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadow-inner shadow-black/20"
                placeholder="This city"
              />
            )}
          />
        </div>
        <div>
          <Label className="text-orange-950/70">Province</Label>
          <Controller
            name="province"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadow-inner shadow-black/20"
                placeholder="That place"
              />
            )}
          />
        </div>
        <div>
          <Label className="text-orange-950/70">Zip Code</Label>
          <Controller
            name="postalCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadow-inner shadow-black/20"
                placeholder="0000"
              />
            )}
          />
          <p className="text-sm font-medium text-red-500">{errors.postalCode?.message}</p>
        </div>
      </div>
      <Button
                  id="transition-button"
                  type="submit"
                  className="my-1 transition-all duration-500 bg-orange-400 shadow-md text-orange-950 hover:bg-orange-500 shadow-black/30"
                >
                  Continue Payment Process
                </Button>
    </form>
  );
};

export default CreditCardForm;
