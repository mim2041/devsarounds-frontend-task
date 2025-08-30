"use client";
import React from "react";
import { motion } from "framer-motion";
import TestimonialSlider from "../shared/TestimonialSlider";

const Testimonials = () => {
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

  // Slider container variants
  const sliderVariants = {
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
    <div className="my-12 lg:my-20">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <motion.h1
          className="text-center md:text-left"
          variants={headerVariants}
        >
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap">
            Testimonials
          </span>
        </motion.h1>
        <motion.p
          className="hidden md:block text-[18px]"
          variants={headerVariants}
        >
          Hear from Our Satisfied Clients: Read Our Testimonials <br />
          to Learn More about Our Digital Marketing Services
        </motion.p>
        <motion.p
          className="md:hidden text-center text-sm"
          variants={headerVariants}
        >
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sliderVariants}
      >
        <TestimonialSlider />
      </motion.div>
    </div>
  );
};

export default Testimonials;
