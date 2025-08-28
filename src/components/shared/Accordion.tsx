"use client";
import { accordionData } from "@/data/accordianData";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto space-y-4 ">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`rounded-3xl border-1 border-b-4 border-black transition-all duration-300 ${
            openIndex === index
              ? "bg-[#B9FF66]"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <span className="text-3xl md:text-[60px] text-black">
                {item.number}
              </span>
              <h3 className="text-lg md:text-[30px] font-semibold text-black">
                {item.title}
              </h3>
            </div>
            <div className="flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center border border-black">
                <span className="text-xl md:text-2xl font-bold text-black">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-6 md:pb-8" : "max-h-0"
            }`}
          >
            <div className="px-6 md:px-8 pb-2">
              <div className="pl-12 md:pl-16">
                <hr />
                <p className="text-black text-base md:text-lg leading-relaxed mt-4">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
