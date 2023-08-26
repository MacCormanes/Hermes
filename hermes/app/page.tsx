'use client'

import Navbar from "./components/Navbar";
import PrimaryHero from "./components/PrimaryHero";
import Directory from "./components/Directory";
import SecondaryHero from "./components/SecondaryHero";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { createUserDocumentFromAuth, getCategoriesAndDocuments, onAuthStateChangedListener } from "@/firebase/firebase.utils";
import { setCurrentUser } from "./rtk-slices/userSlice";
import { useAppDispatch } from "./store/store";
import { setCategoriesMap } from "./rtk-slices/categoriesSlice";

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user:any) => {
      if (user){
        createUserDocumentFromAuth(user);
      }
      const formattedUser = user && (({accessToken, email}) => ({accessToken,email}))(user)
      dispatch(setCurrentUser(formattedUser))
    })
    return unsubscribe
  }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);
  
  return (
    <div className="font-montserrat bg-gradient-to-t from-orange-100 to-orange-200 debug-screens">
        <Navbar />
        <PrimaryHero />
        <Directory />
        <SecondaryHero />
        <Footer />
    </div>
  );
}
