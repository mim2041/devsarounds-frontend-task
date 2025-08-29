"use client";
import Link from "next/link";
import React, { useState } from "react";
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

  return (
    <div>
      <div
        className={`flex items-center justify-between p-6 md:px-8 lg:px-72 fixed w-full lg:py-8 z-50 ${
          isSidebarOpen ? "bg-white/50" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2 text-[30px] md:text-[40px] lg:text-[60px] hover:scale-110 transition-all duration-300 cursor-pointer">
          <PiStarFourFill />
          <h1 className="font-grotesk font-[500]">Positivus</h1>
        </div>
        <div className="">
          <div className="hidden text-[20px] md:flex  items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className=" transition-colors duration-300 hover:bg-[#B9FF66] rounded-lg px-2"
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <button className="border px-6 py-3 rounded-lg">
              Request a quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-[28px] p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2 text-[20px]">
            <PiStarFourFill />
            <h1 className="font-grotesk font-[500]">Positivus</h1>
          </div>
          <button
            onClick={closeSidebar}
            className="text-[24px] p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <IoClose />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col p-6">
          <ul className="flex flex-col gap-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  onClick={closeSidebar}
                  className="text-[18px] hover:text-gray-600 transition-colors duration-200 block py-2"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="border px-6 py-3 rounded-lg mt-8 text-[16px] hover:bg-gray-50 transition-colors duration-200"
            onClick={closeSidebar}
          >
            Request a quote
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
