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
      <div className="flex flex-row justify-center gap-x-8 mb-10">
        <div className="w-2/5 flex flex-col items-center gap-2">
          <h2 className="uppercase">Newsletter</h2>
          <p className="text-[11px]">Receive our newsletter, collections and surprises</p>
          <Input type="email" placeholder="Your Email" className="w-3/4"/>
        </div>
        <div className="flex flex-col w-2/5 items-center">
          <h3 className="uppercase">Follow us</h3>
          <div className="flex w-full justify-center gap-10 mt-5">
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
      <div className="mx-auto w-2/3 flex flex-col items-center gap-2">
        <h2 className="uppercase">Customer Service</h2>
        <Button className="w-32 uppercase text-xs bg-orange-100 text-orange-900 hover:bg-orange-300 transition-all duration-500">Contact Us</Button>
        <div className="flex">
          <h2>800-441-4488</h2>
          <Image
            className=""
            src="/icons/divider.svg"
            width={20}
            height={20}
            alt="Hermes Logo"
          />
          <p>Monday to Friday: 9-am - 6px EST</p>
          <Image
            className=""
            src="/icons/divider.svg"
            width={20}
            height={20}
            alt="Hermes Logo"
          />
          <p>Saturday: 10am - 6pm EST</p>
        </div>
      </div>
      <div className="flex justify-end mt-10 text-xs">
        <p>© Hermès 2023. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
