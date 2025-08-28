"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { caseStudiesData } from "@/data/caseStudiesData";
import { MdOutlineArrowOutward } from "react-icons/md";

const CaseStudiesSwiper = () => {
  return (
    <div className="md:bg-black rounded-4xl">
      <Swiper
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1.2 }, // mobile
          640: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}
      >
        {caseStudiesData.map((cs, index) => (
          <SwiperSlide>
            <div className=" bg-black md:bg-transparent text-white p-10 md:p-16 rounded-4xl flex items-center justify-between ">
              <div className="flex flex-col justify-between ">
                <p className="md:text-[18px] md:w-4/5">{cs.description}</p>
                <button className="flex items-center text-[#B9FF66] gap-2 mt-5 md:text-[20px]">
                  <span>Learn more</span>
                  <MdOutlineArrowOutward />
                </button>
              </div>
              {/* <div className="w-[1px] bg-gray-100 h-full"></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudiesSwiper;
