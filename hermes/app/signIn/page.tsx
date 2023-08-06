"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/hermes.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
  signInWithYahooRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../firebase/firebase.utils.js";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

type FormTypes = {
  email: string;
  password: string;
};

const SignIn = () => {
  const form = useForm<FormTypes>();
  const { register, handleSubmit } = form;

  const router = useRouter();

  const onSubmit = async (data: FormTypes) => {
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        data.email,
        data.password
      );
      const user = response?.user;
      if (user) {
        router.push('/');
      } 
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          toast({
            variant: "destructive",
            title: "Incorrect Password",
            action: (
              <ToastAction altText="Close" className="border-orange-950">
                Try Again
              </ToastAction>
            ),
          });
          break;
        case "auth/user-not-found":
          toast({
            variant: "destructive",
            title: "User not found",
            description: "Perhaps create an account first",
            action: (
              <ToastAction altText="Close" className="border-orange-950">
                Try Again
              </ToastAction>
            ),
          });
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogleRedirectHandler = () => {
    signInWithGoogleRedirect();
  }

  const fetchAuth = async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      await createUserDocumentFromAuth(response.user);
    }
  };
  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-br from-orange-300 via-orange-200 to-orange-300 font-spline">
      <Navbar />
      <div className="mx-auto my-0 flex h-[100vh] w-1/3 flex-col py-[130px] text-orange-900">
        <Image
          src={logo}
          width={150}
          height={150}
          alt="hermes-logo"
          priority={true}
          className="mx-auto mb-5"
        />
        <h1 className="mb-5 text-xl font-medium text-center">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label htmlFor="email" className="mb-1 text-sm font-normal">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder=""
            className="mb-5 shadow-inner"
            {...register("email", {
              required: true,
            })}
          />
          <div className="flex justify-between">
            <Label
              htmlFor="password"
              className="inline mb-1 text-sm font-normal"
            >
              Password
            </Label>
            <Link
              href="/signIn"
              className="mb-1 text-sm font-normal transition-all duration-400 hover:text-orange-600"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder=""
            className="mb-5 "
            {...register("password", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="w-full text-xs uppercase transition-all duration-500 bg-orange-400 shadow-md text-orange-950 hover:bg-orange-300"
          >
            Submit
          </Button>
        </form>
        <div className="flex justify-center gap-5 mt-5 text-sm tracking-tight">
          <span className="font-normal text-orange-950">Not a member? </span>
          <Link href="/signup" className="font-semibold text-orange-700">
            Create an account
          </Link>
        </div>
        <div className="flex gap-4 mt-10">
          <Button
            type="button"
            className="w-1/2 transition-all duration-500 bg-purple-500 shadow-md hover:bg-purple-400"
            onClick={signInWithYahooRedirect}
          >
            Yahoo
          </Button>
          <Button
            type="button"
            className="w-1/2 transition-all duration-500 bg-orange-400 shadow-md hover:bg-orange-300 text-orange-950"
            onClick={signInWithGoogleRedirectHandler}
          >
            Google
          </Button>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default SignIn;
