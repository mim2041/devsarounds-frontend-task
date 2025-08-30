"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonialsData } from "@/data/testimonialsData";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import paginationIcon from "@/assets/logos/logoWhite.svg";
import paginationIcon1 from "@/assets/logos/logogreen.svg";

const TestimonialSlider = () => {
  return (
    <motion.div
      className="bg-gray-800 rounded-[45px] px-7 md:px-0 py-8 md:py-12 relative overflow-hidden my-12 pb-16 md:pb-20"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
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
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            {({ isActive }) => (
              <motion.div
                className={`h-full flex flex-col transition-all duration-300 ${
                  isActive
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-50 md:opacity-70"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: isActive ? 1.02 : 0.97,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Testimonial Card */}
                <motion.div
                  className="bg-gray-900 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-[#B9FF66] relative mb-4 shadow-lg min-h-[200px] md:min-h-[280px] flex items-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                >
                  {/* Speech bubble tail */}
                  <motion.div
                    className="absolute -bottom-2 md:-bottom-3 left-6 md:left-8 w-4 h-4 md:w-6 md:h-6 bg-gray-900 border-r border-b border-[#B9FF66] transform rotate-45"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  />

                  <motion.p
                    className="text-white text-sm md:text-base lg:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    "{testimonial.description}"
                  </motion.p>
                </motion.div>

                {/* Author Info */}
                <motion.div
                  className="pl-6 md:pl-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  <h4 className="text-[#B9FF66] font-semibold text-base md:text-lg mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {testimonial.position}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation + Pagination */}
      <motion.div
        className="flex items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8 absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <motion.button
          className="custom-prev text-white hover:text-[#B9FF66] transition-colors duration-200 p-1 md:p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdArrowRoundBack size={24} className="md:text-[28px]" />
        </motion.button>

        {/* Pagination goes here */}
        <div className="custom-pagination flex items-center gap-2 md:gap-3"></div>

        <motion.button
          className="custom-next text-white hover:text-[#B9FF66] transition-colors duration-200 p-1 md:p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IoMdArrowRoundForward size={24} className="md:text-[28px]" />
        </motion.button>
      </motion.div>

      <style jsx global>{`
        .pagination-bullet {
          opacity: 0.6;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: grayscale(1);
        }

        .pagination-bullet:hover {
          opacity: 0.7;
          transform: scale(1.05);
        }

        .swiper-pagination-bullet-active.pagination-bullet {
          opacity: 1 !important;
          filter: grayscale(0);
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
        }
      `}</style>
    </motion.div>
  );
};

export default TestimonialSlider;
