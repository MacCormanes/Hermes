"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/hermes.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SignOutButton from "../components/ui/SignOutButton";

const SignIn = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log({ session, status });
  
  useEffect(() => {
    if (session) {
      //redirect to homepage
      router.push("/");
    }
    return () => {};
  }, []);

  if (!session)
    return (
      <div className="h-full w-full bg-gradient-to-br from-orange-100 via-orange-100 to-orange-300 font-spline">
        <div className="mx-auto my-0 flex h-[100vh] w-1/3 flex-col py-[130px] text-orange-900">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="hermes-logo"
            priority={true}
            className="mx-auto mb-5"
          />
          <h1 className="mb-5 text-center text-xl font-medium">Sign In</h1>
          <Label htmlFor="email" className="mb-1 text-sm font-normal">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder=""
            className="mb-5 shadow-inner"
          />
          <div className="flex justify-between">
            <Label
              htmlFor="password"
              className="mb-1 inline text-sm font-normal"
            >
              Password
            </Label>
            <Link
              href="/signIn"
              className="duration-400 mb-1 text-sm font-normal transition-all hover:text-orange-600"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder=""
            className=" mb-5"
          />
          <Button
            type="submit"
            className="w-full bg-orange-400 text-xs uppercase text-orange-950 shadow-md transition-all duration-500 hover:bg-orange-300"
          >
            Submit
          </Button>
          <div className="mt-5 flex justify-center gap-5 text-sm tracking-tight">
            <span className="font-normal text-orange-950">Not a member? </span>
            <Link href="/signIn" className="font-semibold text-orange-700">
              Create an account
            </Link>
          </div>
          <div className="mt-10 flex gap-4">
          <Button
              type="button"
              className="w-1/2 bg-blue-500 shadow-md transition-all duration-500 hover:bg-blue-400"
              onClick={(e) => {
                signIn('facebook')
              }}
            >
              Facebook
            </Button>
            <Button
              type="button"
              className="w-1/2 bg-orange-400 shadow-md transition-all duration-500 hover:bg-orange-300 text-orange-950"
              onClick={(e) => {
                signIn('google')
              }}
            >
              Google
            </Button>
          </div>
        </div>
      </div>
    );
};

export default SignIn;
