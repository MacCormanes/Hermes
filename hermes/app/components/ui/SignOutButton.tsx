"use client"

import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button
      onClick={(e) => {
        signOut();
      }}
      type="button"
      className="w-1/2 bg-blue-500 shadow-md transition-all duration-500 hover:bg-blue-400"
    >
      SignOut
    </Button>
  );
};

export default SignOutButton;
