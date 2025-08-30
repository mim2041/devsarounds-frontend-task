"use client";
import { teamMembers } from "@/data/teamData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import linkedin from "@/assets/icons/linkedin.svg";
import Button from "../shared/Button";

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 6);

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

  // Container variants for staggered cards
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual team card variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
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
        <motion.h1
          className="text-center md:text-left"
          variants={headerVariants}
        >
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap">
            Team
          </span>
        </motion.h1>
        <motion.p
          className="hidden md:block text-[18px]"
          variants={headerVariants}
        >
          Meet the skilled and experienced team behind our <br />
          successful digital marketing strategies
        </motion.p>
        <motion.p
          className="md:hidden text-center text-sm"
          variants={headerVariants}
        >
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <AnimatePresence mode="popLayout">
          {displayedMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`border border-b-4 border-black p-8 rounded-3xl ${
                !showAll && index >= 4 ? "hidden md:block" : ""
              }`}
              variants={cardVariants}
              layout
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-end justify-start gap-4 mb-4 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Image src={member.avatar} alt={member.name} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                >
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-600">{member.position}</p>
                </motion.div>
                <motion.div
                  className="absolute right-0 top-0"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  <Link
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={linkedin} alt="LinkedIn" />
                  </Link>
                </motion.div>
              </div>

              <motion.hr
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
              />

              <motion.p
                className="lg:text-lg mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
              >
                {member.experience}
              </motion.p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="flex items-center justify-end mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={() => setShowAll(!showAll)}
            className="hidden md:block"
          >
            {showAll ? "Show less" : "See all team"}
          </Button>
          <Button
            onClick={() => setShowAll(!showAll)}
            className="md:hidden w-full"
          >
            {showAll ? "Show less" : "See all team"}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Team;
