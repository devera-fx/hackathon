import Image from "next/image";
import e1 from "../../public/images/event1.webp";
import e2 from "../../public/images/event2.webp";
import e3 from "../../public/images/event3.webp";
import { Button } from "@/components/ui/button";

const Promotions = () => {
  return (
    <section className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <p className="text-base font-semibold text-blue-600">PROMOTIONS</p>
        <h2 className="scroll-m-20 text-3xl sm:text-6xl font-bold tracking-tight lg:text-3xl my-4">
          Our Promotions Events
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10">
        {/* left */}
        <div className="flex flex-col flex-1 gap-y-5">
          {/* top */}
          <div className="flex flex-row gap-x-8 px-6 justify-center items-center bg-[#d6d6d8]">
            {/* contents */}
            <div>
              <h1 className="text-3xl font-bold">
                GET UPTO <span className="font-extrabold">60%</span>
              </h1>
              <p className="text-lg font-medium">For the summer season</p>
            </div>
            {/* image */}
            <div>
              <Image src={e1} alt="summer season" />
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-col justify-center items-center bg-[#212121] text-white py-10">
            <h1 className="text-4xl font-bold pb-4">GET 30% OFF</h1>
            <p className="text-base font-normal pb-4">USE PROMO CODE</p>
            <Button className="text-2xl rounded-md bg-[#474747]">
              DINE WEEKEND SALE
            </Button>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col sm:flex-row flex-1 gap-y-5 sm:gap-x-5 ">
          {/* left */}
          <div className="flex-1 bg-[#efe1c7] justify-center">
            {/* text */}
            <div>
              <div className="px-5 pt-4">
                <p>Flex Sweetshirt</p>
                <div className="flex pt-1 gap-x-2">
                  <span className="line-through">$100.00</span>
                  <span className="text-lg font-semibold">$75.00</span>
                </div>
              </div>
            </div>
            {/* image */}
            <div className="flex justify-center items-center">
              <Image src={e2} alt="event2" className="mt-5" />
            </div>
          </div>
          {/* right */}
          <div className="flex-1 bg-[#d7d7d9]">
            <div className="">
              {/* text */}
              <div>
                <div className="px-5 pt-4">
                  <p>Flex Sweetshirt</p>
                  <div className="flex pt-1 gap-x-2">
                    <span className="line-through">$225.00</span>
                    <span className="text-lg font-semibold">$190.00</span>
                  </div>
                </div>
              </div>
              {/* image */}
              <div className="flex justify-center items-center">
                <Image src={e3} alt="event3" className="mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
