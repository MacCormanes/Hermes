"use client"

import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "@/firebase/firebase.utils";
import React from "react";

type UserStateType = {
  currentUser: any
  setCurrentUser: React.Dispatch<any>
}

export const UserContext = createContext<UserStateType>({
    currentUser: null,
    setCurrentUser: () => {},
    
});

export const UserProvider = ({ children}: {children: React.ReactNode} ) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const value = {
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user:any) => {
      if (user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    })
    return unsubscribe
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
