"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonialsData } from "@/data/testimonialsData";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import paginationIcon from "@/assets/logos/logoWhite.svg";
import paginationIcon1 from "@/assets/logos/logogreen.svg";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <div className="bg-gray-800 rounded-[45px] px-7 md:px-0 py-8 md:py-12 relative overflow-hidden my-12 pb-16 md:pb-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        // slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.2,
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
            const isActive = className.includes(
              "swiper-pagination-bullet-active"
            );
            const iconSrc = isActive ? paginationIcon1.src : paginationIcon.src;
            return `<div class="${className} pagination-bullet">
              <img src="${iconSrc}" alt="pagination" class="w-4 h-4 md:w-8 md:h-8" />
            </div>`;
          },
        }}
        loop={true}
        className="testimonials-swiper px-4 md:px-8"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            {({ isActive }) => (
              <div
                className={`h-full flex flex-col transition-all duration-300 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50 md:opacity-70"
                }`}
              >
                {/* Testimonial Card */}
                <div className="bg-gray-900 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-[#B9FF66] relative mb-4 shadow-lg min-h-[200px] md:min-h-[280px] flex items-center">
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 md:-bottom-3 left-6 md:left-8 w-4 h-4 md:w-6 md:h-6 bg-gray-900 border-r border-b border-[#B9FF66] transform rotate-45"></div>

                  <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                    "{testimonial.description}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pl-6 md:pl-8">
                  <h4 className="text-[#B9FF66] font-semibold text-base md:text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation + Pagination */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="custom-prev text-white hover:text-[#B9FF66] transition-colors duration-200 p-1 md:p-2">
          <IoMdArrowRoundBack size={24} className="md:text-[28px]" />
        </button>

        {/* Pagination goes here */}
        <div className="custom-pagination flex items-center gap-2 md:gap-3"></div>

        <button className="custom-next text-white hover:text-[#B9FF66] transition-colors duration-200 p-1 md:p-2">
          <IoMdArrowRoundForward size={24} className="md:text-[28px]" />
        </button>
      </div>

      <style jsx global>{`
        .pagination-bullet {
          opacity: 0.4;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(1);
        }

        .pagination-bullet:hover {
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active.pagination-bullet {
          opacity: 1 !important;
          filter: grayscale(0);
          transform: scale(1.2);
        }

        .testimonials-swiper {
          overflow: visible !important;
        }

        .testimonials-swiper .swiper-slide {
          display: flex;
          align-items: center;
        }

        @media (max-width: 767px) {
          .testimonials-swiper .swiper-slide {
            opacity: 1 !important;
            transform: scale(1) !important;
          }

          .pagination-bullet {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
