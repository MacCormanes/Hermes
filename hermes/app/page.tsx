import Navbar from "./components/Navbar";
import PrimaryHero from "./components/PrimaryHero";
import Directory from "./components/Directory";
import SecondaryHero from "./components/SecondaryHero";
import Footer from "./components/Footer";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div className="font-spline">
        <Navbar />
        <PrimaryHero />
        <Directory />
        <SecondaryHero />
        <Footer />
    </div>
  );
}
