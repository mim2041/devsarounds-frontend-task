import React from "react";
import CaseStudiesSwiper from "../shared/CaseStudiesSwiper";

const CaseStudies = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8">
        <h1>
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap">
            Case Studies
          </span>
        </h1>
        <p className="hidden md:block text-[18px]">
          Explore Real-Life Examples of Our Proven Digital Marketing <br />
          Success through Our Case Studies
        </p>
        <p className="md:hidden text-center text-sm">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="my-12 lg:my-20">
        <CaseStudiesSwiper />
      </div>
    </div>
  );
};

export default CaseStudies;
