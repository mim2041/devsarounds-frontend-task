"use client";
import { accordionData } from "@/data/accordianData";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual accordion item variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Content variants for smooth expand/collapse
  const contentVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1] as const, // cubic-bezier for easeInOut
      },
    },
  };

  return (
    <motion.div
      className="w-full max-w-[1300px] mx-auto space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {accordionData.map((item, index) => (
        <motion.div
          key={index}
          className={`rounded-3xl border-1 border-b-4 border-black transition-all duration-300 ${
            openIndex === index
              ? "bg-[#B9FF66]"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          variants={itemVariants}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 },
          }}
        >
          <motion.button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            whileHover={{
              backgroundColor: openIndex === index ? "#B9FF66" : "#E5E7EB",
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-4 md:gap-6">
              <motion.span
                className="text-3xl md:text-[60px] text-black"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.number}
              </motion.span>
              <motion.h3
                className="text-lg md:text-[30px] font-semibold text-black"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
              >
                {item.title}
              </motion.h3>
            </div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center border border-black">
                <motion.span
                  className="text-xl md:text-2xl font-bold text-black"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </div>
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={contentVariants}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <div className="pl-12 md:pl-16">
                    <motion.hr
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                    <motion.p
                      className="text-black text-base md:text-lg leading-relaxed mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {item.content}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Accordion;
