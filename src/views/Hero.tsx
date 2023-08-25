import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import hero from "/public/hero.webp";
import bazaar from "/public/bazaar.webp";
import bustle from "/public/bustle.webp";
import versace from "/public/versace.webp";
import instyle from "/public/instyle.webp";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-16 mt-5">
      {/* left div */}
      <div className="flex-1 mt-10 space-y-8">
        <Badge className="py-2 px-6 text-base rounded-sm bg-[#e1edff] text-blue-800">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-5xl font-bold text-[#212121] tracking-tight lg:text-6xl">
          An Industrial
          <br />
          Take on
          <br />
          Streetwear
        </h1>
        <p className="leading-7 pb-4">
          Anyone can beat you but no one can
          <br />
          beat your outfit as long as you wear
          <br />
          Dine outfits.
        </p>
        <div className="w-full">
          <Link href={"/products"}>
            <Button className="text-base w-64 lg:w-40 h-16 bg-[#212121] gap-x-[8px]">
              <ShoppingCart className="mr-2" /> Start Shopping
            </Button>
          </Link>
        </div>
        <div className="flex gap-x-14 lg:gap-x-8">
          <div className="flex flex-col sm:flex-row gap-x-14">
            <Image src={bazaar} alt="bazaar" />
            <Image src={bustle} alt="bustle" />
          </div>
          <div className="flex flex-col sm:flex-row gap-x-14">
            <Image src={versace} alt="versace" />
            <Image src={instyle} alt="instyle" />
          </div>
        </div>
      </div>
      {/* right div */}
      <div className="hidden justify-center items-center lg:flex flex-1 h-full w-full rounded-full bg-gradient-to-r from-[#fbcfba] to-[#ffece3]">
        <Image src={hero} alt="hero image" className="" />
      </div>
    </section>
  );
};

export default Hero;
