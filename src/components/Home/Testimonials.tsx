import React from "react";

const Testimonials = () => {
  return (
    <div className="my-12 lg:my-20">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8">
        <h1 className="text-center md:text-left">
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap ">
            Team
          </span>
        </h1>
        <p className="hidden md:block text-[18px]">
          Meet the skilled and experienced team behind our <br />
          successful digital marketing strategies
        </p>
        <p className="md:hidden text-center text-sm">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
