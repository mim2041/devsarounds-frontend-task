"use client";
import { teamMembers } from "@/data/teamData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import linkedin from "@/assets/icons/linkedin.svg";
import Button from "../shared/Button";

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 6);

  return (
    <div>
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
      <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedMembers.map((member, index) => (
          <div
            key={member.id}
            className={`border border-b-4 border-black p-8 rounded-3xl ${
              !showAll && index >= 4 ? "hidden md:block" : ""
            }`}
          >
            <div className="flex items-end justify-start gap-4 mb-4 relative">
              <Image src={member.avatar} alt={member.name} />
              <div>
                <p>{member.name}</p>
                <p>{member.position}</p>
              </div>
              <div className="absolute right-0 top-0">
                <Link
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt="LinkedIn" className="" />
                </Link>
              </div>
            </div>
            <hr />
            <p className="lg:text-lg mt-6">{member.experience}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
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
      </div>
    </div>
  );
};

export default Team;
