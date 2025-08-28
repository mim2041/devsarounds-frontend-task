import React from "react";
import heroImg from "@/assets/images/Illustration.svg";
import amazon from "@/assets/icons/amazon.svg";
import dribble from "@/assets/icons/dribble.svg";
import hubspot from "@/assets/icons/hubspot.svg";
import notion from "@/assets/icons/notion.svg";
import netflix from "@/assets/icons/netflix.svg";
import zoom from "@/assets/icons/zoom.svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row justify-between w-full md:items-center gap-8">
        <div className="">
          <h1 className="font-grotesk text-[40px] lg:text-[60px] leading-[120%] mb-8">
            Navigating the <br />
            digital landscape <br />
            for success
          </h1>
          <div className="hidden md:block">
            <p className="text-[20px] leading-[24px] ">
              Our digital marketing agency helps businesses <br />
              grow and succeed online through a range of <br />
              services including SEO, PPC, social media marketing, <br />
              and content creation.
            </p>
            <button className="text-[20px] leading-[28px] bg-black text-white px-6 py-2.5 rounded-lg mt-8">
              Book a consultation
            </button>
          </div>
        </div>
        <div>
          <Image src={heroImg} alt="Positius" className="" />
        </div>
        <div className="md:hidden">
          <p className="text-[20px] leading-[24px] ">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="text-[20px] w-full leading-[28px] bg-black text-white px-6 py-2.5 rounded-lg mt-8">
            Book a consultation
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between  mt-8 md:mt-12">
        {[amazon, dribble, hubspot, notion, netflix, zoom].map(
          (icon, index) => (
            <Image key={index} src={icon} alt="" className="" />
          )
        )}
      </div>
      <div className="md:hidden flex items-center justify-between flex-wrap mt-8 md:mt-12">
        {[amazon, dribble, hubspot, notion, netflix, zoom].map(
          (icon, index) => (
            <Image key={index} src={icon} alt="" className="w-[30%]" />
          )
        )}
      </div>
    </div>
  );
};

export default HeroSection;
