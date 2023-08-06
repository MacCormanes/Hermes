import Link from "next/link";
import React from "react";
import Image from "next/image";
import fb from "../../public/icons/facebook.png";
import ig from "../../public/icons/instagram.png";
import yt from "../../public/icons/youtube.png";
import twitter from "../../public/icons/twitter.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="h-[350px] flex flex-col justify-center bg-orange-200 text-orange-950">
      <div className="flex flex-row justify-center mb-10 gap-x-8">
        <div className="flex flex-col items-center w-2/5 gap-2">
          <h2 className="uppercase">Newsletter</h2>
          <p className="text-[11px]">
            Receive our newsletter, collections and surprises
          </p>
          <div className="flex w-4/5 gap-2">
            <Input type="email" placeholder="Your Email" className="w-3/4 shadow-inner shadow-black/30" />
            <Button className="text-xs uppercase transition-all duration-500 bg-orange-400 shadow-md text-orange-950 hover:bg-orange-500 shadow-black/30"> Subscribe </Button>
          </div>
        </div>
        <div className="flex flex-col items-center w-2/5">
          <h3 className="uppercase">Follow us</h3>
          <div className="flex justify-center w-full gap-10 mt-5">
            <Link href="https://www.facebook.com/hermes/">
              <Image src={fb} alt="facebook" width={32} height={32} />
            </Link>
            <Link href="https://www.instagram.com/hermes/">
              <Image src={ig} alt="instagram" width={32} height={32} />
            </Link>
            <Link href="https://twitter.com/hermes_paris">
              <Image src={twitter} alt="twitter" width={32} height={32} />
            </Link>
            <Link href="https://www.youtube.com/user/hermes">
              <Image src={yt} alt="youtube" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-2/3 gap-2 mx-auto">
        <h2 className="uppercase">Customer Service</h2>
        <Button className="w-32 h-auto text-xs text-orange-900 uppercase transition-all duration-500 bg-orange-100 shadow-md hover:bg-orange-300 shadow-black/20">
          Contact Us
        </Button>
        <div className="flex">
          <p>800-441-4488 |</p>
          <p>| Monday to Friday: 9-am - 6px EST |</p>
          <p>| Saturday: 10am - 6pm EST </p>
        </div>
      </div>
      <div className="flex justify-end mt-10 text-xs">
        <p>© Hermès 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
