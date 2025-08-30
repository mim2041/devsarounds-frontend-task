"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import { PiStarFourFill } from "react-icons/pi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { title: "About us", link: "/about-us" },
    { title: "Services", link: "/services" },
    { title: "Use Cases", link: "/use-cases" },
    { title: "Pricing", link: "/pricing" },
    { title: "Blog", link: "/blog" },
  ];

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Navbar entrance animation
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  // Staggered nav items animation
  const navItemsVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Sidebar variants
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const sidebarContentVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const sidebarItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <motion.div
        className={`flex items-center justify-between p-6 md:px-8 lg:px-72 fixed w-full lg:py-8 z-50 ${
          isSidebarOpen ? "bg-white/50" : "bg-white"
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-2 text-[30px] md:text-[40px] lg:text-[60px] cursor-pointer"
          whileHover={{
            scale: 1.05,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <PiStarFourFill />
          </motion.div>
          <h1 className="font-grotesk font-[500]">Positivus</h1>
        </motion.div>

        <div>
          <motion.div
            className="hidden text-[20px] md:flex items-center gap-8"
            variants={navItemsVariants}
            initial="hidden"
            animate="visible"
          >
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={navItemVariants}
                  whileHover={{
                    y: -2,
                    backgroundColor: "#B9FF66",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="transition-colors duration-300 rounded-lg px-2"
                >
                  <Link href={item.link}>{item.title}</Link>
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="border px-6 py-3 rounded-lg cursor-pointer"
              variants={navItemVariants}
              whileHover={{
                backgroundColor: "#B9FF66",
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Request a quote
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden text-[28px] p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isSidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoMenu />
          </motion.button>
        </div>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 md:hidden"
            onClick={closeSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-[60%] bg-white shadow-2xl z-50 md:hidden"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              variants={sidebarContentVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Sidebar Header */}
              <motion.div
                className="flex items-center justify-between p-6 border-b"
                variants={sidebarItemVariants}
              >
                <div className="flex items-center gap-2 text-[20px]">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <PiStarFourFill />
                  </motion.div>
                  <h1 className="font-grotesk font-[500]">Positivus</h1>
                </div>
                <motion.button
                  onClick={closeSidebar}
                  className="text-[24px] p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  whileHover={{
                    scale: 1.1,
                    rotate: 90,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoClose />
                </motion.button>
              </motion.div>

              {/* Sidebar Navigation */}
              <nav className="flex flex-col p-6">
                <ul className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={sidebarItemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.link}
                        onClick={closeSidebar}
                        className="text-[18px] hover:text-gray-600 transition-colors duration-200 block py-2"
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  className="border px-6 py-3 rounded-lg mt-8 text-[16px]"
                  onClick={closeSidebar}
                  variants={sidebarItemVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#B9FF66",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a quote
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
