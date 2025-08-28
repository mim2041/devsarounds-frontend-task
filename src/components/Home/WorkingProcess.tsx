import React from "react";
import Accordion from "../shared/Accordion";

const WorkingProcess = () => {
  return (
    <div className=" my-20 lg:my-28">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8">
        <h1 className="text-center md:text-left">
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap ">
            Our Working Process
          </span>
        </h1>
        <p className="hidden md:block text-[18px]">
          Step-by-Step Guide to Achieving <br />
          Your Business Goals
        </p>
        <p className="md:hidden text-center text-sm">
          Step-by-Step Guide to Achieving Your Business <br />
          Goals
        </p>
      </div>

      <div className="mt-12 lg:mt-16">
        <Accordion />
      </div>
    </div>
  );
};

export default WorkingProcess;
