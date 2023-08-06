import Navbar from "./components/Navbar";
import PrimaryHero from "./components/PrimaryHero";
import Directory from "./components/Directory";
import SecondaryHero from "./components/SecondaryHero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-montserrat debug-screens">
        <Navbar />
        <PrimaryHero />
        <Directory />
        <SecondaryHero />
        <Footer />
    </div>
  );
}
