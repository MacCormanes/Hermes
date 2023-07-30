"use client";

import logo from "../../public/hermes.svg";
import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "@/firebase/firebase.utils";
import { UserCredential } from "firebase/auth";
import { useRouter } from "next/navigation";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserType = {
  user: UserCredential | undefined;
};

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const { toast } = useToast();

  const onSubmit = async (data: FormValues) => {
    const {name, email, password, confirmPassword} = data
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Password Error",
        description: "Woops! Passwords do not match.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential?.user;
      if (user) {
       await createUserDocumentFromAuth(user, name);
      }
      toast({
        variant: 'success',
        title: "Account Creation Successful",
        action: <ToastAction altText="Close" className="border-orange-950 hover:bg-green-400" onClick={() => router.push('/signIn')}>Close</ToastAction>,
      });
      setTimeout(()=>{router.push('/signIn')}, 5000)
    } catch (error: any) {
      if (error?.code === "auth/email-already-in-use"){
        toast({
          variant: 'destructive',
          title: "Account Creation Failed",
          description: 'Email is already in use',
          action: <ToastAction altText="Close" className="border-orange-950">Try Again</ToastAction>,
        });
        console.log("user creation error", error);
      }
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-300 via-orange-200 to-orange-300 font-spline">
      <div className="mx-auto my-0 flex h-[100vh] w-1/3 flex-col py-[100px] text-orange-900">
        <Image
          src={logo}
          width={150}
          height={150}
          alt="hermes-logo"
          priority={true}
          className="mx-auto mb-3"
        />
        <h1 className="mb-5 text-xl font-medium text-center">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label htmlFor="name" className="text-base">
            Display Name
          </Label>
          <Input
            type="text"
            id="name"
            className="my-0"
            {...register("name", {
              required: "I'm sorry, we can't call you a nobody.",
            })}
          />
          <p className="mt-1 mb-2 text-xs font-medium text-red-400">
            {errors.name?.message}
          </p>

          <Label htmlFor="email" className="text-base">
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

          <Label htmlFor="password" className="text-base">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            className=""
            {...register("password", {
              required: "A password should be given.",
            })}
          />
          <p className="mt-1 mb-2 text-xs font-medium text-red-400">
            {errors.password?.message}
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
        <Toaster />
      </div>
    </div>
  );
};

export default SignUpForm;
