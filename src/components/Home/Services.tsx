"use client";
import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import frame from "@/assets/images/Frame.svg";
import Button from "../shared/Button";

const Services = () => {
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

  // Container for staggered cards
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual service card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // CTA section variants
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
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
            Services
          </span>
        </motion.h1>
        <motion.p
          className="hidden md:block text-[18px]"
          variants={headerVariants}
        >
          At our digital marketing agency, we offer a range of services to{" "}
          <br />
          help businesses grow and succeed online. These services include:
        </motion.p>
        <motion.p className="md:hidden text-center" variants={headerVariants}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-3xl border-b-4 border-black border flex items-center justify-between cursor-pointer"
            style={{ backgroundColor: service.bg }}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start flex-col justify-between h-full gap-16">
              <motion.h3
                className="w-full md:w-2/3 text-[20px] md:text-[30px] text-black"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span
                  className="px-3 py-1 font-medium leading-0 rounded-lg"
                  style={{ backgroundColor: service.textBg }}
                >
                  {service.title}
                </span>
              </motion.h3>
              <motion.button
                className={`flex items-center gap-2 text-[20px] ${
                  service.bg == "#191A23" ? "text-white" : "text-black"
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <BsArrowUpRightCircleFill className="text-2xl" />
                Learn more
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                className="hidden md:block"
              />
              <Image
                src={service.image}
                alt={service.title}
                className="md:hidden w-[40%]"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-[#F3F3F3] rounded-3xl p-8 relative my-12 lg:my-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={ctaVariants}
      >
        <motion.h2
          className="text-[30px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {"Let's make things happen"}
        </motion.h2>
        <motion.p
          className="text-[18px] my-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Contact us today to learn more about how our digital <br />
          marketing services can help your business grow and <br />
          succeed online.
        </motion.p>
        <motion.div
          className="hidden md:block absolute -top-10 right-0"
          initial={{ opacity: 0, x: 30, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 },
          }}
        >
          <Image src={frame} alt="frame" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button className="hidden md:block mb-6">
            Get your free proposal
          </Button>
          <Button className="md:hidden w-full">Get your free proposal</Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
