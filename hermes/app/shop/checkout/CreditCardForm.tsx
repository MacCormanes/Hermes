import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { object, number, string } from "yup";

type CreditCardFormData = {
  email: string;
  cardNumber: number;
  cardHolderName: string;
  expirationMonth: number;
  expirationYear: number;
  cvv: number;
  address: string;
  city: string;
  province: string;
  postalCode: number;
};

const schema = object().shape({
  email: string().email().required("We need your cool email address"),
  cardNumber: number().required("Card Number is required").min(15).max(16),
  cardHolderName: string().required("Card holder name is required").min(1),
  expirationMonth: number()
    .required("Expiration month is required")
    .min(1)
    .max(12),
  expirationYear: number()
    .required("Expiration year is required")
    .min(new Date().getFullYear()),
  cvv: number().required("CVV is required").min(3).max(3),
  address: string().required("We need your delivery address"),
  city: string().required("We need your city"),
  province: string().required("We need your state/province"),
  postalCode: number().required("We need your postal code").min(4).max(4),
});

const CreditCardForm = () => {
  const { handleSubmit, control, formState } = useForm<CreditCardFormData>({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const submitHandler = () => {};

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col justify-center gap-5"
    >
      <div>
        <Label className="text-orange-950/70">Email Address</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className="shadow-inner shadow-black/20"
              placeholder="ironman@avengers.com"
            />
          )}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <Label className="text-orange-950/70">Name on card</Label>
        <Controller
          name="cardHolderName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className="shadow-inner shadow-black/20"
              placeholder="Anthony Edwards Stark"
            />
          )}
        />
        <p>{errors.cardHolderName?.message}</p>
      </div>
      <div>
        <Label className="text-orange-950/70">Card number</Label>
        <Controller
          name="cardNumber"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className="shadow-inner shadow-black/20"
              placeholder="4012 8888 8888 1881"
            />
          )}
        />
        <p>{errors.cardNumber?.message}</p>
      </div>
      <div className="flex gap-4">
        <div>
          <Label className="text-orange-950/70">Expiry Month</Label>
          <Controller
            name="expirationMonth"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadow-inner shadow-black/20"
                placeholder="1"
              />
            )}
          />
          <p>{errors.expirationMonth?.message}</p>
        </div>
        <div>
          <Label className="text-orange-950/70">Expiry Year</Label>
          <Controller
            name="expirationYear"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadow-inner shadow-black/20"
                placeholder="2099"
              />
            )}
          />
          <p>{errors.expirationYear?.message}</p>
        </div>
        <div>
          <Label className="text-orange-950/70">CVV</Label>
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                className="shadow-inner shadow-black/20"
                placeholder="123"
              />
            )}
          />
          <p>{errors.cvv?.message}</p>
        </div>
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
        <p>{errors.address?.message}</p>
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
          <p>{errors.city?.message}</p>
        </div>
        <div>
          <Label className="text-orange-950/70">State / Province</Label>
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
          <p>{errors.province?.message}</p>
        </div>
        <div>
          <Label className="text-orange-950/70">Postal Code</Label>
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
          <p>{errors.postalCode?.message}</p>
        </div>
      </div>
    </form>
  );
};

export default CreditCardForm;
