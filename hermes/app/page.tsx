"use client";

import Navbar from "./components/Navbar";
import PrimaryHero from "./components/PrimaryHero";
import Directory from "./components/Directory";
import SecondaryHero from "./components/SecondaryHero";
import Footer from "./components/Footer";
import BackToTopButton from "./components/ui/Animations/BackToTopButton";

export default function Home() {
  return (
    <div className="font-montserrat bg-gradient-to-t from-orange-100 to-orange-200 debug-screens">
      <Navbar />
      <PrimaryHero />
      <Directory />
      <SecondaryHero />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
