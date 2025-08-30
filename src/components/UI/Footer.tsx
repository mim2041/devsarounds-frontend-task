"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logos/logoWhite.svg";
import Image from "next/image";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const navItems = [
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Use Cases", link: "/use-cases" },
    { title: "Pricing", link: "/pricing" },
    { title: "Blog", link: "/blog" },
  ];

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual element variants
  const itemVariants = {
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

  // Social icon variants
  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.footer
      className="bg-[#191A23] text-white rounded-t-3xl mt-16 max-w-[1300px] mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-between gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2 text-[28px] md:text-[36px]"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image src={logo} alt="Positivus Logo" />
            </motion.div>
            <h1 className="font-grotesk font-[500]">Positivus</h1>
          </motion.div>

          <motion.ul
            className="flex flex-col md:flex-row gap-6 text-sm lg:text-lg md:text-base"
            variants={itemVariants}
          >
            {navItems.map((i, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={i.link}
                  className="hover:text-[#B9FF66] md:underline-offset-4 md:underline transition-opacity duration-200"
                >
                  {i.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="md:flex items-center gap-4 text-xl text-black font-bold hidden"
            variants={itemVariants}
          >
            {["in", "f", <TiSocialTwitter key="twitter" />].map((icon, idx) => (
              <motion.div
                key={idx}
                className="w-8 h-8 rounded-full hover:bg-[#B9FF66] bg-white grid place-items-center cursor-pointer"
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 text-center md:text-left gap-8 lg:gap-0 lg:text-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block bg-[#B9FF66] text-black rounded-lg px-3 py-1 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Contact us:
            </motion.span>
            <motion.div
              className="space-y-4 text-white"
              variants={containerVariants}
            >
              {[
                { label: "Email:", value: "info@positivus.com" },
                { label: "Phone:", value: "555-567-8901" },
                {
                  label: "Address:",
                  value: "1234 Main St\nMoonstone City, Stardust State 12345",
                },
              ].map((contact, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium">{contact.label}</span>{" "}
                  {contact.value}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-2xl p-6 md:p-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <form className="flex flex-col md:flex-row w-full gap-4 items-center h-full">
              <motion.input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-xl bg-transparent border border-white px-4 py-3 text-white outline-none placeholder:text-white/70 w-full md:w-auto"
                whileFocus={{
                  scale: 1.02,
                  borderColor: "#B9FF66",
                  transition: { duration: 0.2 },
                }}
              />
              <motion.button
                type="submit"
                className="bg-[#B9FF66] text-black rounded-xl px-6 py-3 whitespace-nowrap w-full md:w-auto"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#A8E55C",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Subscribe to news
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-4 text-black font-bold md:hidden"
            variants={itemVariants}
          >
            {["in", "f", <TiSocialTwitter key="twitter-mobile" />].map(
              (icon, idx) => (
                <motion.div
                  key={idx}
                  className="w-6 h-6 rounded-full bg-white grid place-items-center cursor-pointer"
                  whileHover={{
                    scale: 1.3,
                    rotate: [0, -15, 15, 0],
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  {icon}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 h-px bg-white"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mt-10 text-white/80 text-sm text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="#"
              className="md:underline underline-offset-4 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
