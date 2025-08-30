"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import frame from "@/assets/images/Illustration.png";
import Button from "../shared/Button";

const ContactUs = () => {
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

  // Form container variants
  const formContainerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.2,
      },
    },
  };

  // Form elements staggered variants
  const formVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Image variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="my-12 lg:my-20">
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
            Contact Us
          </span>
        </motion.h1>
        <motion.p
          className="hidden md:block text-[18px]"
          variants={headerVariants}
        >
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </motion.p>
        <motion.p
          className="md:hidden text-center text-sm"
          variants={headerVariants}
        >
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </motion.p>
      </motion.div>

      <motion.div
        className="bg-[#F3F3F3] rounded-3xl p-6 md:p-8 lg:py-10 lg:px-20 mt-8 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={formContainerVariants}
      >
        <div className="relative lg:min-h-[420px]">
          {/* Left: Form */}
          <motion.form
            className="space-y-5 relative z-10 lg:max-w-[60%]"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-6"
              variants={formItemVariants}
            >
              <motion.label
                className="flex items-center gap-2 text-sm cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <input
                  type="radio"
                  name="type"
                  defaultChecked
                  className="accent-[#B9FF66]"
                />
                <span>Say Hi</span>
              </motion.label>
              <motion.label
                className="flex items-center gap-2 text-sm cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <input type="radio" name="type" className="accent-[#B9FF66]" />
                <span>Get a Quote</span>
              </motion.label>
            </motion.div>

            <motion.div variants={formItemVariants}>
              <motion.label
                className="text-sm block mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                Name
              </motion.label>
              <motion.input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-[#191A23]/20 bg-white px-4 py-3 outline-none"
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#B9FF66",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <motion.label
                className="text-sm block mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                Email*
              </motion.label>
              <motion.input
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-xl border border-[#191A23]/20 bg-white px-4 py-3 outline-none"
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#B9FF66",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            <motion.div variants={formItemVariants}>
              <motion.label
                className="text-sm block mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                Message*
              </motion.label>
              <motion.textarea
                required
                placeholder="Message"
                rows={6}
                className="w-full rounded-xl border border-[#191A23]/20 bg-white px-4 py-3 outline-none resize-none"
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#B9FF66",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            <motion.div
              variants={formItemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full hidden md:block">
                Send Message
              </Button>
            </motion.div>
          </motion.form>

          {/* Right: Decorative graphic */}
          <motion.div
            className="hidden lg:block absolute -right-[28.5%] top-1/2 -translate-y-1/2"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.5 },
            }}
          >
            <Image src={frame} alt="frame" className="w-[520px] h-auto" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button type="submit" className="w-full md:hidden">
          Send Message
        </Button>
      </motion.div>
    </section>
  );
};

export default ContactUs;
