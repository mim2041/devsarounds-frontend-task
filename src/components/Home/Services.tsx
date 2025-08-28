import { servicesData } from "@/data/servicesData";
import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import frame from "@/assets/images/Frame.svg";
import Button from "../shared/Button";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-5 md:gap-8">
        <h1>
          <span className="bg-[#B9FF66] text-[40px] px-2 rounded-lg font-space-grotesk text-wrap">
            Services
          </span>
        </h1>
        <p className="hidden md:block text-[18px]">
          At our digital marketing agency, we offer a range of services to{" "}
          <br />
          help businesses grow and succeed online. These services include:
        </p>
        <p className="md:hidden text-center">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-16">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-3xl border-b-4 border-black border flex items-center justify-between "
            style={{ backgroundColor: service.bg }}
          >
            <div className="flex items-start flex-col justify-between h-full gap-16">
              <h3 className="w-full md:w-2/3 text-[20px] md:text-[30px] text-black">
                <span
                  className="px-3 py-1 font-medium leading-0 rounded-lg"
                  style={{ backgroundColor: service.textBg }}
                >
                  {service.title}
                </span>
              </h3>
              <button
                className={`flex items-center gap-2 text-[20px] ${
                  service.bg == "#191A23" ? "text-white" : "text-black"
                }`}
              >
                <BsArrowUpRightCircleFill className="text-2xl" />
                Learn more
              </button>
            </div>
            <Image
              src={service.image}
              alt={service.title}
              className="hidden md:block"
            />
            <Image
              src={service.image}
              alt={service.title}
              className="md:hidden w-[40%]"
            />
          </div>
        ))}
      </div>

      <div className="bg-[#F3F3F3] rounded-3xl p-8 relative my-12 lg:my-20">
        <h2 className="text-[30px]">{"Let's make things happen"}</h2>
        <p className="text-[18px] my-6">
          Contact us today to learn more about how our digital <br />
          marketing services can help your business grow and <br />
          succeed online.
        </p>
        <div className="hidden md:block absolute -top-10 right-0">
          <Image src={frame} alt="frame" className="" />
        </div>
        <Button className="hidden md:block mb-6">Get your free proposal</Button>
        <Button className="md:hidden w-full">Get your free proposal</Button>
      </div>
    </div>
  );
};

export default Services;
