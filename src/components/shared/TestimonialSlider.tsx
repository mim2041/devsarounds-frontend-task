"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonialsData } from "@/data/testimonialsData";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { PiStarFourLight } from "react-icons/pi";

const TestimonialSlider = () => {
  return (
    <div className="bg-gray-800 rounded-[45px] py-12 relative overflow-hidden my-12 pb-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            // 🔥 Use PiStarFourLight instead of default bullet
            return `<span class="${className} flex items-center justify-center text-white"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 256 256"><path d="M128 24l26.5 77.5L232 128l-77.5 26.5L128 232l-26.5-77.5L24 128l77.5-26.5L128 24z" stroke="currentColor" stroke-width="16"/></svg></span>`;
          },
        }}
        loop={true}
        className="testimonials-swiper"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            {({ isActive }) => (
              <div
                className={`h-full flex flex-col transition-all duration-300 ${
                  isActive ? "scale-100" : "scale-95 opacity-70"
                }`}
              >
                {/* Testimonial Card */}
                <div className="bg-gray-900 rounded-3xl p-6 md:p-8 border border-[#B9FF66] relative mb-4 shadow-lg">
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-3 left-8 w-6 h-6 bg-gray-900 border-r border-b border-[#B9FF66] transform rotate-45"></div>

                  <p className="text-white text-base md:text-lg leading-relaxed">
                    “{testimonial.description}”
                  </p>
                </div>

                {/* Author Info */}
                <div className="pl-8">
                  <h4 className="text-[#B9FF66] font-semibold text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation + Pagination */}
      <div className="flex items-center justify-center gap-6 mt-8 absolute bottom-5 left-[40%]">
        <button className="custom-prev text-white hover:text-[#B9FF66] transition-colors duration-200 p-2">
          <IoMdArrowRoundBack size={28} />
        </button>

        {/* Pagination goes here */}
        <div className="custom-pagination flex items-center gap-4"></div>

        <button className="custom-next text-white hover:text-[#B9FF66] transition-colors duration-200 p-2">
          <IoMdArrowRoundForward size={28} />
        </button>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          opacity: 0.5;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          color: #b9ff66 !important;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
