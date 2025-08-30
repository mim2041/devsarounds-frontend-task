"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { caseStudiesData } from "@/data/caseStudiesData";
import { MdOutlineArrowOutward } from "react-icons/md";

const CaseStudies = () => {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Swiper container variants
  const swiperVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.2,
      },
    },
  };

  return (
    <div>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <motion.h1 variants={headerVariants}>
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap">
            Case Studies
          </span>
        </motion.h1>
        <motion.p
          className="hidden md:block text-[18px]"
          variants={headerVariants}
        >
          Explore Real-Life Examples of Our Proven Digital Marketing <br />
          Success through Our Case Studies
        </motion.p>
        <motion.p
          className="md:hidden text-center text-sm"
          variants={headerVariants}
        >
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </motion.p>
      </motion.div>

      <motion.div
        className="my-12 lg:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={swiperVariants}
      >
        <div className="md:bg-black rounded-[45px]">
          <Swiper
            spaceBetween={20}
            loop={true}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1.2 }, // mobile
              640: { slidesPerView: 2 }, // tablet
              1024: { slidesPerView: 3 }, // desktop
            }}
          >
            {caseStudiesData.map((cs, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-black md:bg-transparent text-white p-10 md:p-16 rounded-[45px] flex items-center justify-between"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex flex-col justify-between">
                    <motion.p
                      className="md:text-[18px] md:w-4/5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                      {cs.description}
                    </motion.p>
                    <motion.button
                      className="flex items-center text-[#B9FF66] gap-2 mt-5 md:text-[20px]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <span>Learn more</span>
                      <motion.div
                        whileHover={{
                          rotate: 45,
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <MdOutlineArrowOutward />
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudies;
