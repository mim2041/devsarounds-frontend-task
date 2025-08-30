"use client";
import React from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/images/Illustration.svg";
import Image from "next/image";
import Button from "../shared/Button";
import LogoScroll from "../shared/LogoScroll";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const logoScrollVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row justify-between w-full md:items-center gap-8">
        <motion.div variants={textVariants}>
          <motion.h1
            className="font-grotesk text-[40px] lg:text-[60px] leading-[120%] mb-8"
            variants={textVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Navigating the
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              digital landscape
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              for success
            </motion.span>
          </motion.h1>

          <div className="hidden md:block">
            <motion.p
              className="text-[20px] leading-[24px] mb-8"
              variants={textVariants}
            >
              Our digital marketing agency helps businesses <br />
              grow and succeed online through a range of <br />
              services including SEO, PPC, social media marketing, <br />
              and content creation.
            </motion.p>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button>Book a consultation</Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={imageVariants}>
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: [0, -1, 1, -1, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Image src={heroImg} alt="Positivus" />
          </motion.div>
        </motion.div>

        <motion.div className="md:hidden" variants={textVariants}>
          <motion.p
            className="text-[20px] leading-[24px] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button className="w-full">Book a consultation</Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center justify-between mt-8 md:mt-12"
        variants={logoScrollVariants}
      >
        <LogoScroll />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
