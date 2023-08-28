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
    <div className="flex flex-col items-center justify-center pt-12 bg-orange-200 text-orange-950">
      <div className="flex flex-col gap-10 md:flex-row lg:gap-36">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-base font-semibold uppercase">Newsletter</h2>
          <p className="text-xs lg:text-sm">
            Receive our newsletter, collections and surprises
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Your Email" className="shadow-inner shadow-black/30 h-[2rem] lg:w-[250px]" />
            <Button className="h-[2rem] text-xs uppercase transition-all duration-500 bg-orange-400 shadow-md text-orange-950 hover:bg-orange-500 shadow-black/30"> Subscribe </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-5 font-semibold text-center uppercase">Follow us</h3>
          <div className="flex justify-center w-full gap-10">
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
      <div className="flex flex-col items-center w-2/3 gap-2 mx-auto mt-12">
        <h2 className="uppercase">Customer Service</h2>
        <Button className="w-32 h-auto text-xs text-orange-900 uppercase transition-all duration-500 bg-orange-100 shadow-md hover:bg-orange-300 shadow-black/20">
          Contact Us
        </Button>
        <div className="text-sm font-light text-center lg:flex lg:gap-5">
          <p>800-441-4488</p>
          <p>Monday to Friday: 9-am - 6pm EST</p>
          <p>Saturday: 10am - 6pm EST</p>
        </div>
      </div>
      <div className="flex justify-end py-5 mt-10 text-xs">
        <p>© Hermès 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
