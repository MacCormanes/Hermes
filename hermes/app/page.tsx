import Navbar from "./components/Navbar";
import PrimaryHero from "./components/PrimaryHero";
import Directory from "./components/Directory";
import SecondaryHero from "./components/SecondaryHero";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <div className="font-spline debug-screens">
        <Navbar />
        <PrimaryHero />
        <Directory />
        <SecondaryHero />
        <Footer />
    </div>
  );
}
